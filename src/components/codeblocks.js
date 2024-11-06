export default function widgetCode({ ids = "", apiKey, widgetType = "reservation" }) {
  const domId =
    ids
      ?.split(",")
      ?.filter((i) => i?.trim?.()?.length)
      ?.map((id) => `"#${id.trim()}"`) || "";

  return `<script src="https://widget.letsumai.com/dist/embed.min.js" data-api-key="${apiKey}" data-widget-type="${widgetType}"></script>
<script type="text/javascript">
  function init(event) {
    [${domId}].forEach((id) => {
      var links = document.querySelectorAll(id);
      links.forEach((link) => {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          umaiWidget.config({
            apiKey: "${apiKey}",
            widgetType: "${widgetType}"
          });
          umaiWidget.openWidget();
          return false;
        });
      });
    });
  }
  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('mercury:load', init);
</script>`;
}
