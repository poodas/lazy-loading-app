import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.styl"]
})
export class DialogComponent implements OnInit {
  selectedValue: [];
  arrays = [];
  status: boolean;
  checkboxCollection: any = [
    { label: "check1" },
    { label: "check2" },
    { label: "check3" },
    { label: "check4" }
  ];

  cities = [
    { label: "Select City", value: null },
    { label: "New York", value: { id: 1, name: "New York", code: "NY" } },
    { label: "Rome", value: { id: 2, name: "Rome", code: "RM" } },
    { label: "London", value: { id: 3, name: "London", code: "LDN" } },
    { label: "Istanbul", value: { id: 4, name: "Istanbul", code: "IST" } },
    { label: "Paris", value: { id: 5, name: "Paris", code: "PRS" } }
  ];

  @ViewChild("drp") public dropdDown;
  constructor() {
    this.arrays = [];

    console.log(this.dropdDown);
  }

  ngOnInit() {}

  checkboxChangeDetection(event) {
    console.log(event);
    console.log(this.checkboxCollection);
  }

  dropDownChangeDetection(event) {
    console.log(event);
    console.log(this.dropdDown);
  }
}
