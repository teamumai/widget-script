export default function widgetCode({ ids = "", apiKey, widgetType = "reservation" }) {
  const domId =
    ids
      .split(",")
      .filter((i) => i.trim().length)
      .map((id) => `"${id.trim()}"`) || "";

  return `<!-- 
  You can copy and paste this script directly into your website. 
  Place it in either the <head> or <body> section of your website's HTML document. 
  Ensure that you only include this script once on your page/website to avoid duplicate executions.
-->
<script
  src="https://widget.letsumai.com/dist/embed.min.js"
  data-api-key="${apiKey}"
  data-widget-type="${widgetType}">
</script>
<script type="text/javascript">
  function init() {
    /**
     * Explanation for developers:
     * - The button IDs should be entered as a comma-separated list with no spaces between them.
     * - IDs must be valid according to the CSS selector rules used by \`querySelectorAll\`.
     * 
     * Valid formats:
     * - IDs (e.g., \`#button1\`)
     * - Class names (e.g., \`.btn-2\`)
     * - Attribute selectors (e.g., \`[id="custom:id"]\`)
     * 
     * Example usage:
     * - \`#button1, .btn-2, [id="custom:id"]\`
     * 
     * Ensure that the input follows proper CSS selector syntax as described on MDN's \`querySelectorAll\` documentation:
     * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
     */
    [${
      domId
        .split(",")
        .filter((i) => i.trim().length)
        .map((id) => `"${id.trim()}"`) || ""
    }].forEach((id) => {
      // Use \`document.querySelectorAll\` to find all elements matching the CSS selector in the custom button input.
      var links = document.querySelectorAll(id);
      links.forEach((link) => {
        // Attach a click event listener to each selected element.
        link.addEventListener("click", function (e) {
          e.preventDefault(); // Prevent the default action of the click event.
          // Configure the \`umaiWidget\` with the provided \`apiKey\` and \`widgetType\`.
          umaiWidget.config({ apiKey: "${apiKey}", widgetType: "${widgetType}" });
          umaiWidget.openWidget(); // Open the widget modal when an element is clicked.
          return false; // Return \`false\` to further prevent any default link behavior.
        }); 
      });
    });
  }
  /**
   * Attaching \`init\` function when the page has fully loaded.
   * It sets up event listeners for specific elements that match the provided custom button.
   * Each matching element will trigger the \`umaiWidget\` with a specified configuration when clicked.
   */
  document.addEventListener("DOMContentLoaded", init);
  window.addEventListener("mercury:load", init);
</script>`;
}
