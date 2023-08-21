import { html } from "lit";
import type { FTableSchemaCell } from "@cldcvr/flow-table";

export default function emailCellTemplate(this: FTableSchemaCell) {
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return html`<f-div gap="x-small"
    ><f-icon
      state="warning"
      @click=${handleClick}
      clickable
      source="i-email-tick"
    ></f-icon
    ><f-text inline state="warning">${this.value}</f-text></f-div
  >`;
}
