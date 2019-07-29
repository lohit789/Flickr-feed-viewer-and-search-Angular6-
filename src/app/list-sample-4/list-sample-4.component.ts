import { Component, OnInit } from "@angular/core";
import { IgxFilterOptions } from "igniteui-angular";
@Component({
  selector: "app-contact-list2",
  styleUrls: ["./list-sample-4.component.scss"],
  templateUrl: "./list-sample-4.component.html"
})
export class ListSample4Component implements OnInit {
  public searchContact: string;

  public contacts = [
    {
      isFavorite: false,
      name: "Jose Morales",
      phone: "Dead lizard by the sea",
      photo: "https://live.staticflickr.com/65535/48393995331_601b5f6fcc_b.jpg"
    },
    {
      isFavorite: true,
      name: "asadahmedsuri",
      phone: "????????, ???????",
      photo: "https://live.staticflickr.com/65535/48393995411_7125320846_b.jpg"
    }, 
    {
      isFavorite: false,
      name: "dopeboy79",
      phone: "First enclosure",
      photo: "https://live.staticflickr.com/65535/48393995781_6cb5a43c14_b.jpg"
    },
    {
      isFavorite: false,
      name: "Stinkee Beek",
      phone: "Sun Jul 28 03:06:52 2019",
      photo: "https://live.staticflickr.com/65535/48393996271_31072c7f30_b.jpg"
    },
    {
      isFavorite: true,
      name: "BNSF4924",
      phone: "Meghalaya",
      photo: "https://live.staticflickr.com/65535/48393996676_6a3a24f782_b.jpg"
    },
    {
      isFavorite: true,
      name: "handersonchulet@ymail.com",
      phone: "2019 07 20_5DII_7610.jpg",
      photo: "https://live.staticflickr.com/65535/48393996981_961d266cdc_b.jpg"
    },
    {
      isFavorite: true,
      name: "jaap.dijks",
      phone: "IMG_20180921_064735",
      photo: "https://live.staticflickr.com/65535/48393997151_da4787e62b_b.jpg"
    }
  ];

  public density = "comfortable";
  public displayDensities;

  constructor() { }

  public ngOnInit() {
    this.displayDensities = [
        { label: "comfortable", selected: this.density === "comfortable", togglable: true },
        { label: "cosy", selected: this.density === "cosy", togglable: true },
        { label: "compact", selected: this.density === "compact", togglable: true }
    ];
  }

  public selectDensity(event) {
    this.density = this.displayDensities[event.index].label;
  }

  public toggleFavorite(contact: any) {
    contact.isFavorite = !contact.isFavorite;
  }

  get filterContacts() {
    const fo = new IgxFilterOptions();
    fo.key = "name";
    fo.inputValue = this.searchContact;
    return fo;
  }
}

