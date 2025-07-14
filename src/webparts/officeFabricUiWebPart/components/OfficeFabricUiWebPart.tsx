import * as React from "react";
//import styles from './OfficeFabricUiWebPart.module.scss';
import type { IOfficeFabricUiWebPartProps } from "./IOfficeFabricUiWebPartProps";
//import { escape } from "@microsoft/sp-lodash-subset";
import { Dropdown, TextField, DropdownMenuItemType } from "@fluentui/react";

export default class OfficeFabricUiWebPart extends React.Component<IOfficeFabricUiWebPartProps> {
  public render(): React.ReactElement<IOfficeFabricUiWebPartProps> {
    return (
      <>
        <TextField
          label="Name"
          iconProps={{ iconName: "people" }}
          placeholder="Enter your name"
        />
        <TextField
          label="Email"
          iconProps={{ iconName: "mail" }}
          placeholder="Enter your email"
          type="email"
        />
        <TextField
          label="Email"
          iconProps={{ iconName: "mail" }}
          placeholder="Enter your email"
          type="email"
        />
        <TextField label="Password" type="password" />
        <TextField label="File" type="file" />
        <TextField label="Salary" prefix="$" suffix="USD" />
        <TextField label="Error" errorMessage="I am error" disabled={true} />
        <TextField
          label="Address"
          multiline
          rows={5}
          iconProps={{ iconName: "home" }}
        />
        <Dropdown
          options={[
            {
              key: "Header",
              text: "Options",
              itemType: DropdownMenuItemType.Header,
            },
            { key: "A", text: "Option a", data: { icon: "Memo" } },
            { key: "B", text: "Option b", data: { icon: "Print" } },
            { key: "C", text: "Option c", data: { icon: "ShoppingCart" } },
            { key: "D", text: "Option d", data: { icon: "Train" } },
            { key: "E", text: "Option e", data: { icon: "Repair" } },
            {
              key: "divider_2",
              text: "-",
              itemType: DropdownMenuItemType.Divider,
            },
            {
              key: "Header2",
              text: "More options",
              itemType: DropdownMenuItemType.Header,
            },
            { key: "F", text: "Option f", data: { icon: "Running" } },
            { key: "G", text: "Option g", data: { icon: "EmojiNeutral" } },
            { key: "H", text: "Option h", data: { icon: "ChatInviteFriend" } },
            { key: "I", text: "Option i", data: { icon: "SecurityGroup" } },
            { key: "J", text: "Option j", data: { icon: "AddGroup" } },
          ]}
          label="Dropdown with icons"
        />
      </>
    );
  }
}
