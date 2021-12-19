import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import appDevelopmentIcon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";

import camera from "../../assets/camera.svg";
import upload from "../../assets/upload.svg";
import person from "../../assets/person.svg";
import persons from "../../assets/persons.svg";
import people from "../../assets/people.svg";
import info from "../../assets/info.svg";
import bell from "../../assets/bell.svg";
import users from "../../assets/users.svg";
import iphone from "../../assets/iphone.svg";
import gps from "../../assets/gps.svg";
import customized from "../../assets/customized.svg";
import data from "../../assets/data.svg";
import android from "../../assets/android.svg";
import globe from "../../assets/globe.svg";
import biometrics from "../../assets/biometrics.svg";

export const defaultQuestions = [
  {
    id: 0,
    title: "Which service are you interested in?",
    multiSelection: false,
    active: true,
    options: [
      {
        id: 0,
        type: "software",
        title: "Custom Software Development",
        icon: customSoftwareIcon,
        iconAlt: "three floating screens",
        selected: false,
        cost: 0,
      },
      {
        id: 1,
        type: "software",
        title: "iOS/Android App Development",
        icon: appDevelopmentIcon,
        iconAlt: "phones and tablets outline",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        type: "website",
        title: "Website Development",
        icon: websiteIcon,
        iconAlt: "computer outline",
        selected: false,
        cost: 0,
      },
    ],
  },
];

export const softwareQuestions = [
  {
    ...defaultQuestions[0],
    active: false,
  },
  {
    id: 1,
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    multiSelection: true,
    active: true,
    options: [
      {
        id: 0,
        title: "Web Application",
        type: "platforms",
        subtitle: null,
        icon: websiteIcon,
        iconAlt: "computer outline",
        selected: false,
        cost: 100,
      },
      {
        id: 1,
        title: "iOS Application",
        type: "platforms",
        subtitle: null,
        icon: iphone,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        type: "platforms",
        title: "Android Application",
        subtitle: null,
        icon: android,
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 100,
      },
    ],
  },
  {
    id: 2,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    multiSelection: true,
    active: false,
    options: [
      {
        id: 0,
        title: "Photo/Video",
        type: "features",
        subtitle: null,
        icon: camera,
        iconAlt: "camera outline",
        selected: false,
        cost: 25,
      },
      {
        id: 1,
        title: "GPS",
        type: "features",
        subtitle: null,
        icon: gps,
        iconAlt: "gps pin",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "File Transfer",
        type: "features",
        subtitle: null,
        icon: upload,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 25,
      },
    ],
  },
  {
    id: 3,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    multiSelection: true,
    active: false,
    options: [
      {
        id: 0,
        title: "Users/Authentication",
        type: "features",
        subtitle: null,
        icon: users,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25,
      },
      {
        id: 1,
        title: "Biometrics",
        type: "features",
        subtitle: null,
        icon: biometrics,
        iconAlt: "fingerprint",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Push Notifications",
        type: "features",
        subtitle: null,
        icon: bell,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 25,
      },
    ],
  },
  {
    id: 4,
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    multiSelection: false,
    active: false,
    options: [
      {
        id: 0,
        title: "Low Complexity",
        type: "customFeatures",
        subtitle: "Informational",
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 1,
        title: "Medium Complexity",
        type: "customFeatures",
        subtitle: "Interactive, Customizable, Realtime",
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50,
      },
      {
        id: 2,
        title: "High Complexity",
        type: "customFeatures",
        subtitle: "Data Modeling and Computation",
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100,
      },
    ],
  },
  {
    id: 5,
    title: "How many users do you expect?",
    subtitle: "Select one.",
    multiSelection: false,
    active: false,
    options: [
      {
        id: 0,
        type: "users",
        title: "0-10",
        subtitle: null,
        icon: person,
        iconAlt: "person outline",
        selected: false,
        cost: 1,
      },
      {
        id: 1,
        type: "users",
        title: "10-100",
        subtitle: null,
        icon: persons,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25,
      },
      {
        id: 2,
        type: "users",
        title: "100+",
        subtitle: null,
        icon: people,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.5,
      },
    ],
  },
];

export const websiteQuestions = [
  {
    ...defaultQuestions[0],
    active: false,
  },
  {
    id: 1,
    title: "Which type of website are you wanting?",
    subtitle: "Select one.",
    multiSelection: false,
    active: true,
    options: [
      {
        id: 0,
        title: "Basic",
        type: "category",
        subtitle: "Informational",
        icon: info,
        iconAlt: "person outline",
        selected: false,
        cost: 100,
      },
      {
        id: 1,
        title: "Interactive",
        type: "category",
        subtitle: "Users, API's, Messaging",
        icon: customized,
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 2,
        title: "E-Commerce",
        type: "category",
        subtitle: "Sales",
        icon: globe,
        iconAlt: "outline of three people",
        selected: false,
        cost: 250,
      },
    ],
  },
];
