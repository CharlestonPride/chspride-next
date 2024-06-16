
import * as yup from "yup";

const FILE_SIZE = 1024 * 1024 * 10;
const SUPPORTED_FORMATS = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export interface Applicant {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  pronouns: { subjective: string; objective: string; possessive: string };
  statement: string;
  skills: {
    administrationManagement: boolean;
    entertainment: boolean;
    eventPlanning: boolean;
    financeAccounting: boolean;
    fundraising: boolean;
    grantWriting: boolean;
    outreachAdvocacy: boolean;
    policyDevelopment: boolean;
    programEvaluation: boolean;
    socialMediaCommunications: boolean;
    visualMedia: boolean;
    volunteerManagement: boolean;
    technologyWebManagement: boolean;
    other: string;
  };
  liaison: string;
  file: File;
  resume: {
    fileName: string;
    type: string;
    size: number;
  };
  readBylaws: boolean;
  recaptcha: string;
}

export const applicantSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("A valid email is required")
    .required("A valid email is required"),
  phoneNumber: yup
    .string()
    .matches(
      /(?:(?:(\s*\(?([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\)?\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/,
      "A valid phone number is required"
    )
    .required("A valid phone number is required"),
  pronouns: yup.object({
    subjective: yup.string(),
    objective: yup.string(),
    possessive: yup.string(),
  }),
  statement: yup.string(),
  skills: yup.object({
    administrationManagement: yup.boolean(),
    entertainment: yup.boolean(),
    eventPlanning: yup.boolean(),
    financeAccounting: yup.boolean(),
    fundraising: yup.boolean(),
    grantWriting: yup.boolean(),
    outreachAdvocacy: yup.boolean(),
    policyDevelopment: yup.boolean(),
    programEvaluation: yup.boolean(),
    socialMediaCommunications: yup.boolean(),
    visualMedia: yup.boolean(),
    volunteerManagement: yup.boolean(),
    technologyWebManagement: yup.boolean(),
    other: yup.string(),
  }),
  liaison: yup.string(),
  readBylaws: yup
    .boolean()
    .required("You must be read the bylaws before applying")
    .oneOf([true], "You must be read the bylaws before applying"),
  file: yup
    .mixed()
    .required("You must attach a resume")
    .test(
      "fileSize",
      `File too large. Please select a file under 10MB`,
      (value) => value === null || (value && (value as File).size <= FILE_SIZE)
    )
    .test(
      "fileFormat",
      "Unsupported file type. Supported file formats are .doc, .docx, and .pdf",
      (value) =>
        value === null || (value && SUPPORTED_FORMATS.includes((value as File).type))
    ),
  recaptcha: yup.string().nullable().required(),
});

export const initialValues: Applicant = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  pronouns: { subjective: "", objective: "", possessive: "" },
  statement: "",
  skills: {
    administrationManagement: false,
    entertainment: false,
    eventPlanning: false,
    financeAccounting: false,
    fundraising: false,
    grantWriting: false,
    outreachAdvocacy: false,
    policyDevelopment: false,
    programEvaluation: false,
    socialMediaCommunications: false,
    visualMedia: false,
    volunteerManagement: false,
    technologyWebManagement: false,
    other: "",
  },
  liaison: "",
  file: null,
  resume: null,
  readBylaws: false,
  recaptcha: null,
};
