export default function widgetCode({ ids = "", apiKey, widgetType = "reservation" }) {
  return `<!--
  Important Note for Users:
  Copy and paste this script into your website's HTML.
  Place it in either the <head> or <body> section of your website's HTML document. 
  Ensure that you only place this script once per page/website to avoid duplicate executions.
-->
<script 
  src="https://widget.letsumai.com/dist/embed.min.js"
  data-api-key="${apiKey}"
  data-widget-type="${widgetType}">
</script>
<script type="text/javascript">
  function init() {
    /**
     * Explanation for users:
     * - Enter button selectors (IDs or classes) are comma-separated list without spaces and match button on your page.
     * - Button selectors must be valid according to the CSS selector rules used by \`querySelectorAll\`.
     *
     * Valid formats:
     * - IDs: #button1 or #button2
     * - Classes: .btn1 or .btn-custom
     * - Attribute selectors: [id="specialButton"]
     *
     * For details on valid CSS selector syntax, see:
     * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
     */
    [${
      ids
        .split(",")
        .filter((i) => i.trim().length)
        .map((id) => `"${id.trim()}"`) || ""
    }].forEach((id) => {
      // Use \`document.querySelectorAll\` to find all elements matching the CSS selector in the custom button input.
      var links = document.querySelectorAll(id);
      links.forEach((link) => {
        // Attach a click event listener to each selected element.
        link.addEventListener("click", function (e) {
          e.preventDefault();
          // Configure the \`umaiWidget\` with the provided \`apiKey\` and \`widgetType\`.
          umaiWidget.config({ apiKey: "${apiKey}", widgetType: "${widgetType}" });
          // Open the widget modal when an element is clicked.
          umaiWidget.openWidget();
          return false;
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
