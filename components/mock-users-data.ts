import { faker } from "@faker-js/faker";
import { html } from "lit";
import type {
  FTableSchemaData,
  FTableSchemaDataRow,
  FTableSchemaCell,
  FTableSchemaHeaderCell,
} from "@cldcvr/flow-table";

import emailCellTemplate from "./email-cell-template";

export default function getFakeUsers(
  rowCount = 100,
  columnCount = 8
): FTableSchemaData {
  const users = [];

  for (let i = 0; i < rowCount; i++) {
    const firstName = { value: faker.person.firstName() };
    const lastName = { value: faker.person.lastName() };
    const email: FTableSchemaCell & { value: string } = {
      value: faker.internet.email(),
      template: emailCellTemplate,
      actions: [
        {
          icon: "i-chat",
          id: "chat",
        },
        {
          icon: "i-mail",
          id: "meail",
        },
        {
          icon: "i-star",
          id: "star",
        },
      ],
    };
    const mobile = { value: faker.phone.number() };
    const sex = { value: faker.person.sex() };
    const age = { value: faker.random.numeric(2) };
    const birthDate: FTableSchemaCell & { value: Date } = {
      value: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
      template: function () {
        return html`<f-div gap="small" width="hug-content">
          <f-icon source="i-date-time"></f-icon>
          <f-text inline
            >${this.value.getDate()}-${this.value.getMonth()}-${this.value.getFullYear()}</f-text
          ></f-div
        >`;
      },
      toString: function () {
        return this.value.toString();
      },
    };

    const address = {
      value: `${faker.location.street()}, ${faker.location.city()}, ${faker.location.state()}, ${faker.location.zipCode()} ${faker.location.country()}`,
    };

    const userRow: FTableSchemaDataRow = {
      id: `r${i}`,
      state: i === 0 ? "danger" : "default",
      selected: i === 3,
      data: {
        firstName,
        lastName,
        age,
        birthDate,
        email,
        mobile,
        sex,
        address,
      },
      details: function () {
        return html`<f-div padding="large"
          ><f-text state="danger">This is Details slot</f-text></f-div
        >`;
      },
    };
    users.push(userRow);
  }

  const header: Record<string, FTableSchemaHeaderCell> = {
    firstName: { value: "First name", sticky: true },
    lastName: { value: "Last name" },
    age: { value: "Age", width: "100px" },
    birthDate: { value: "Birth Date" },
    mobile: { value: "Mobile" },
    email: { value: "Email" },
    sex: { value: "Sex" },
    address: { value: "Address", width: "300px", selected: true },
  };

  return {
    header: Object.fromEntries(Object.entries(header).slice(0, columnCount)),
    rows: users,
  };
}
