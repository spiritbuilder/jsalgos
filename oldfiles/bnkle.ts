import { isMatch } from "../leetcode/regex";
import tokens from "./tokens";
import { v4 } from "uuid";
import axios from "axios";
import fs from "node:fs/promises";
import { google } from "googleapis";
import { type } from "node:os";

console.log(isMatch("abc", "a*bc"));
tokens.map((m) => {
  console.log(m.name);
});
console.log(tokens.length);
let list: { [key: string]: any } = {};
tokens.map((m) => {
  list = { ...list, ...m.platforms };
});

Object.keys(list).map((m) => {
  console.log(m);
});

const createExpoLink = (str: string) => "exp://u.expo.dev/update/" + `${str}`;

const printLinks = (and: string, i: string) => {
  let android = createExpoLink(and + " -android");
  let ios = createExpoLink(i + "  -ios");
  console.log(android + "\n\n" + ios);
};

printLinks(
  "31a0f49e-118e-4a06-99ec-b3f02859901c",
  "a8e88fff-ace7-4346-be6d-117f4810cbf1"
);

let x =
  "https://bnkle-fe2-git-update-timcommercial-bnkleruby.vercel.app/projects?role=projectOwner&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGxvd2luZ1BvbGljaWVzIjpbImJpZHM6KiIsInByb2plY3RzOioiLCJ0YXNrcyoiLCJzdWItdGFza3MqIiwiZmlsZXM6KiIsInByb2plY3RzOmNoZWNrbGlzdHM6KiIsImlhbTpwcm9mZXNzaW9uYWxzOkdFVDpwcm9mZXNzaW9uYWwqIiwiaWFtOnVzZXJzOkdFVDpnZXQtZGV0YWlscyIsInByb2plY3RzOnN1Ym1pc3Npb25zOkdFVDoqIiwiaWFtOnVzZXJzOlBBVENIOnVwZGF0ZSIsImlhbTp1c2VyczpHRVQqIiwicHJvamVjdHM6cHJvdG90eXBlczpHRVQ6KiIsInByb2plY3RzOm1lZXRpbmc6KiIsIm1lc3NhZ2luZzpldmVudHMqIiwibWVzc2FnaW5nOnVzZXJzOlBPU1Q6c3luYyIsInByb2plY3RzOm5vdGlmaWNhdGlvbjpHRVQ6KiIsInByb2plY3RzOm5vdGlmaWNhdGlvbjpQT1NUOmNyZWF0ZSIsImlhbTpwcm9maWxlOlBBVENIOnVwZGF0ZSIsIl5pYW06dXNlcnM6UE9TVDpnZW5lcmF0ZS1zaWduZWQtdXJsKiIsIm1lc3NhZ2luZzpncm91cDpQT1NUOmNyZWF0ZSIsIm1lc3NhZ2luZzpncm91cDpHRVQqIiwibWVzc2FnaW5nOmdyb3VwOlBBVENIKiIsIm1lc3NhZ2luZzpncm91cDpERUxFVEUqIiwiaWFtOnByb2ZpbGU6UEFUQ0g6cHJlZmVyZW5jZSoiLCJpYW06cmVmZXJyYWxzOlBPU1Q6Z2VuZXJhdGUtY29kZSIsImlhbTpyZWZlcnJhbHM6R0VUOmRhc2hib2FyZCIsImlhbTpyZWZlcnJhbHM6UE9TVDppbnZpdGUiLCJpYW06cmVmZXJyYWxzOkdFVDp1c2VyIiwiaWFtOnJlZmVycmFsczpQT1NUOnJlcXVlc3Qtd2l0aGRyYXdhbCIsInByb2plY3RzOmZpbGVzOlBPU1QiLCJwcm9qZWN0czpmaWxlczpQQVRDSCJdLCJkZW55aW5nUG9saWNpZXMiOlsicHJvamVjdHM6cHJvdG90eXBlczpQT1NUOmFkZCJdLCJfaWQiOiI2M2ZlMWM0ZGMyOTg1ZGYyYjI3NThkNDkiLCJuYW1lIjoicHJvamVjdE93bmVyIiwiaWF0IjoxNzEyNTg1MTYyLCJleHAiOjE3MTMxODk5NjJ9.mr3M4p_T_59u5JpbP9FVUBfxSqSNMHxrjxcr4y6YUsw";
console.log(x);

const url = "https://bnkle-fe2-git-ft-tutorials-bnkleruby.vercel.app/projects";
const role = "portfolioManager";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGxvd2luZ1BvbGljaWVzIjpbIl5pYW06KiIsIl5wcm9qZWN0czoqIiwiaWFtOnVzZXJzOlBBVENIOnVwZGF0ZSIsIm1lc3NhZ2luZzp1c2VyczpQT1NUOnN5bmMiLCJtZXNzYWdpbmc6ZXZlbnRzKiIsImlhbTpndWVzdHMqIiwiaWFtOnByb2ZpbGU6UEFUQ0g6dXBkYXRlIiwicHJvamVjdHM6bm90aWZpY2F0aW9uOkdFVDoqIiwicHJvamVjdHM6bm90aWZpY2F0aW9uOlBPU1Q6Y3JlYXRlIiwiXmlhbTp1c2VyczpQT1NUOmdlbmVyYXRlLXNpZ25lZC11cmwqIiwibWVzc2FnaW5nOmdyb3VwOlBPU1Q6Y3JlYXRlIiwibWVzc2FnaW5nOmdyb3VwOkdFVCoiLCJtZXNzYWdpbmc6Z3JvdXA6UEFUQ0gqIiwibWVzc2FnaW5nOmdyb3VwOkRFTEVURSoiLCJpYW06cHJvZmlsZTpQQVRDSDpwcmVmZXJlbmNlKiIsInByb2plY3RzOmZpbGVzOlBPU1QiLCJwcm9qZWN0czpmaWxlczpQQVRDSCIsImlhbTpyZWZlcnJhbHM6UE9TVDpnZW5lcmF0ZS1jb2RlIiwiaWFtOnJlZmVycmFsczpHRVQ6ZGFzaGJvYXJkIiwiaWFtOnJlZmVycmFsczpQT1NUOmludml0ZSIsImlhbTpyZWZlcnJhbHM6R0VUOnVzZXIiLCJpYW06cmVmZXJyYWxzOlBPU1Q6cmVxdWVzdC13aXRoZHJhd2FsIiwiaWFtOnJlZmVycmFsczpHRVQ6bGlzdCIsImlhbTpyZWZlcnJhbHM6R0VUOndpdGhkcmF3YWxzLWJ5LXVzZXIiLCJpYW06cmVmZXJyYWxzOlBBVENIOm9mZmVyLXJld2FyZCIsImlhbTpyZWZlcnJhbHM6UE9TVDpjb25maXJtLXBheW1lbnQiLCJpYW06cmVmZXJyYWxzOkdFVDptYW5hZ2VyLWRhc2hib2FyZCIsImlhbTpyZWZlcnJhbHM6R0VUOmFjdGl2ZS11c2VycyIsImlhbTpyZWZlcnJhbHM6R0VUOndpdGhkcmF3YWwtcmVxdWVzdHMiLCJpYW06cmVmZXJyYWxzOkdFVDphcHByb3ZlZC13aXRoZHJhd2FscyJdLCJkZW55aW5nUG9saWNpZXMiOltdLCJfaWQiOiI2NTMzODdkZWM1Mzc3MzdkYmI5ODdjNzYiLCJuYW1lIjoicG9ydGZvbGlvTWFuYWdlciIsImlhdCI6MTcyMTIzMDA3OSwiZXhwIjoxNzIxODM0ODc5fQ.4bxyGjmHCp4igBNpoH9rieVbaVWMJ12jBLmLgYvBZvs";

const getBnkleLink = (url: string, role: string, token: string) => {
  return `${url}?role=${role}&token=${token}`;
};

console.log(
  "\n\n=======\n\nThis is bnkle === ",
  getBnkleLink(url, role, token)
);

let ratio = 400 / 514;
let height = 540 / ratio;
console.log("ration is = ", height);
let y = {
  name: "Zinnat tab 500mgA",
  type: "single",
  category_id: 10,
  brand_id: "",
  product_description: "",
  barcode_type: "C128",
  alert_quantity: "5",
  unit_id: 8,
  sku: "Zinn1",
  profit_percent: "0",
  single_dpp_inc_tax: "4000",
  single_dsp_inc_tax: 4000,
  single_dpp: "4000",
  single_dsp: "4000",
  barcode: "",
  tax_type: "inclusive",
  tax: "",
  sub_unit_ids: "",
  preparation_time_in_minutes: "",
  expiry_period_type: "",
  expiry_period: "0",
  id: 124,
};

console.log(v4());

console.log(
  `Olusola Abayomi-Alli 
Gricuipio gatve 9,
51373- Kaunas,
Lithuania`.toUpperCase()
);

console.log(
  `3/5 Sylvester Idakwo Crescent, Barnawa G.R.A., Kaduna, Nigeria`.toUpperCase()
);

export const ping = () => {
  axios({ method: "get", url: "https://jomavapi.onrender.com/" }).then((m) =>
    console.log(m.data)
  );
};

let error = {
  id: 100293,
  name: "Timksa",
  business_id: 3,
  type: "single",
  secondary_unit_id: null,
  sub_unit_ids: null,
  enable_stock: 0,
  alert_quantity: "100",
  sku: "1211232",
  barcode_type: "C128",
  expiry_period: null,
  expiry_period_type: null,
  expiry_date: "2024-05-29T11:00:00.000Z",
  enable_sr_no: 0,
  weight: null,
  product_custom_field1: null,
  product_custom_field2: null,
  product_custom_field3: null,
  product_custom_field4: null,
  product_custom_field5: null,
  product_custom_field6: null,
  product_custom_field7: null,
  product_custom_field8: null,
  product_custom_field9: null,
  product_custom_field10: null,
  product_custom_field11: null,
  product_custom_field12: null,
  product_custom_field13: null,
  product_custom_field14: null,
  product_custom_field15: null,
  product_custom_field16: null,
  product_custom_field17: null,
  product_custom_field18: null,
  product_custom_field19: null,
  product_custom_field20: null,
  woocommerce_media_id: null,
  product_description: "",
  created_by: 11,
  woocommerce_product_id: null,
  woocommerce_disable_sync: 0,
  preparation_time_in_minutes: null,
  warranty_id: null,
  is_inactive: 0,
  not_for_selling: 0,
  image_url: "https://www.pos.virtualrx.com.ng/img/default.png",
  product_variations: [100532],
  sub_category: null,
  product_locations: [],
  category_id: 11,
  unit_id: 8,
  profit_percent: "230",
  single_dpp_inc_tax: "10090",
  single_dsp_inc_tax: 33297,
  single_dpp: "10090",
  single_dsp: "33297",
  tax_type: "inclusive",
  tax: "",
  single_variation_id: 100293,
};

const correct = {
  id: 98893,
  name: "Timtexam",
  business_id: 3,
  type: "single",
  secondary_unit_id: null,
  sub_unit_ids: null,
  enable_stock: 0,
  alert_quantity: "12",
  sku: "32Q",
  barcode_type: "EAN13",
  expiry_period: null,
  expiry_period_type: null,
  expiry_date: "",
  enable_sr_no: 0,
  weight: null,
  product_custom_field1: "",
  product_custom_field2: "",
  product_custom_field3: "",
  product_custom_field4: "",
  product_custom_field5: "",
  product_custom_field6: "",
  product_custom_field7: "",
  product_custom_field8: "",
  product_custom_field9: "",
  product_custom_field10: "",
  product_custom_field11: "",
  product_custom_field12: "",
  product_custom_field13: "",
  product_custom_field14: "",
  product_custom_field15: "",
  product_custom_field16: "",
  product_custom_field17: "",
  product_custom_field18: "",
  product_custom_field19: "",
  product_custom_field20: "",
  woocommerce_media_id: null,
  product_description: "Interest",
  created_by: 11,
  woocommerce_product_id: null,
  woocommerce_disable_sync: 0,
  preparation_time_in_minutes: null,
  warranty_id: null,
  is_inactive: 0,
  not_for_selling: 0,
  image_url: "https://www.pos.virtualrx.com.ng/img/default.png",
  product_variations: [99109],
  sub_category: null,
  product_locations: [],
  category_id: 512,
  unit_id: 534,
  profit_percent: "23",
  single_dpp_inc_tax: "200",
  single_dsp_inc_tax: 246,
  single_dpp: "200",
  single_dsp: "246",
  tax_type: "inclusive",
  tax: "",
  single_variation_id: 98893,
};

for (let x in correct) {
  let y = error[x as keyof typeof correct];
  let j = correct[x as keyof typeof correct];
  if (y == null && j !== null) {
  }
}

const accesstypes = ["view", "modify", "create", "view-all", "delete"];

const resources = [
  "employee",
  "payment",
  "client",
  "branch",
  "payment-plan",
  "work_experience",
  "qualification",
];

let _permissions = resources
  .map((m) => accesstypes.map((y) => `${y}-${m}`))
  .flat();

console.log(_permissions);

let createFile = async () => {
  let file = new Blob(["Hello WORLD"], { type: "text/plain" });
  let buffer = Buffer.from(await file.arrayBuffer());
  let _file = new File(["I am hsppy"], "text.bnb");
  buffer = Buffer.from(await _file.arrayBuffer());
  await fs.writeFile("./x1.txt", buffer);
};

// createFile();

type ObjectType = { [key: string]: any };
const removeFieldsFromObject = (arr: string[], obj: ObjectType) => {
  let newObj: ObjectType = { ...obj };
  for (let x in newObj) {
    const isAvailable = arr.includes(x);
    if (isAvailable) {
      delete newObj[x];
    }
  }

  return newObj;
};

console.log(removeFieldsFromObject(["faster"], { name: "Tim", faster: "Sol" }));

let _data: ObjectType = {
  id: "ac371e6f-73cf-4d5c-8743-f79b03a1ca39",
  surname: "hello",
  other_names: "James Bond",
  sex: "male",
  marital_status: "single",
  date_of_birth: "2024-05-01T11:48:16.894Z",
  nationality: "Nigerian",
  email: "taoluleke@gmail.com",
  phone: "08132032607",
  id_number: "10220348595",
  id_type: "National ID Card",
  occupation: "Engineer",
  employer: "Bnkle",
  estate_id: "d8f1a1c5-a4b4-42db-95ff-b8c592b563bf",
  address: "20, Akure Street, Nigeria",
  employer_address: "`20, Akure Street, Nigeria",
  next_of_kin: "Agbolu",
  next_of_kin_address: "ibadan ",
  number_of_plots: 4,
  plot_size: 300,
  signature_date: "2024-05-01T11:48:16.894Z",
  marketer_id_number: "d8f1a1c5-a4b4-42db-95ff-b8c592b563bf",
  funnnel: "instagram",
  payment_plan_daily: 1,
  payment_plan_monthly: 22,
  building_purpose: "Hotel",
  mode_of_document_collection: "online",
  mode_of_collection_of_promotional_items: "inperson",
  marketer_phone: "08132032607",
  passport:
    "http://res.cloudinary.com/ddkfwcu7t/image/upload/v1720409117/kgo8aqxmhpq4ut36zzxy.jpg",
  signature:
    "http://res.cloudinary.com/ddkfwcu7t/image/upload/v1720409117/yf3ty5vni9apwlpioodz.jpg",
  updatedAt: "2024-07-08T03:23:54.828Z",
  createdAt: "2024-07-08T03:23:54.828Z",
  funnel: null,
};

let _client: ObjectType = {
  id: "47c6b264-39e7-4bf8-8ba5-586a847eaa6c",
  first_name: "Joseph",
  last_name: "Janks",
  middle_name: "JImd",
  email: "timan@mailinator.com",
  next_of_kin: "Madrid Spain",
  next_of_kin_phone: "08022122305",
  role_id: null,
  address: "goodland, Canaan, Heaven",
  next_of_kin_address: "makdf, Lifeline",
  gender: "male",
  marital_status: "single",
  nationality: "Heavenly",
  id_card_type: "driver's license",
  id_card:
    "http://res.cloudinary.com/ddkfwcu7t/image/upload/v1717600601/yixwr5h4myvvvphybczr.jpg",
  id_number: "A1234",
  account_number: null,
  occupation: "Engineering",
  employer: "Facebook",
  employer_address: "California, United States",
  image:
    "http://res.cloudinary.com/ddkfwcu7t/image/upload/v1717600601/t8186onoomualwxdcwyb.jpg",
  phone: "08132032608",
  next_of_kin_email: "timtim@mailinator.com",
  referral_code: "AQ1234",
  permissions: null,
  branch_id: null,
  password: "$2a$12$e4KXRh51TaEBYFQPBx/MreDG2aQ2Zq/fe8Nqf9WPUK8Ex0pcFJxty",
  createdAt: "2024-06-05T15:16:42.235Z",
  updatedAt: "2024-06-05T15:16:42.235Z",
};
console.log(Object.keys(_client));

let ClientKeys = [
  "first_name",
  "last_name",
  "middle_name",
  "email",
  "address",
  "next_of_kin",
  "next_of_kin_phone",
  "next_of_kin_address",
  "gender",
  "marital_status",
  "nationality",
  "id_card_type",
  "id_number",
  "occupation",
  "employer",
  "employer_address",
  "phone",
  "next_of_kin_email",
  "referral_code",
  "password",
  "id_card",
  "image",
  "branch_id",
];

const convertFormtoClient = (formData: ObjectType) => {
  let _data: ObjectType = {};

  for (let key of ClientKeys) {
    if (formData[key]) {
      _data[key] = formData[key];
    }
  }

  let names = formData["other_names"].split(" ");
  _data.first_name = names[0];
  _data.middle_name = names[1];
  _data.last_name = _data?.surname;
  _data.gender = formData?.sex;
  _data.password = formData?.phone;
  _data.role_id = "kd";
  _data.image = formData?.passport;
  console.log(_data);
  return _data;
};

("branch_id,next_of_kin_phone,id_card_type,id_card,account_number,next_of_kin_email,referral_code");

let _formKeys = Object.keys(convertFormtoClient(_data));
for (let x in _client) {
  if (!_formKeys.includes(x)) {
    console.log(x);
  }
}

const convertDuration = (s: string) => {
  let str = s.slice(2, s.length - 1);
  let regall = /[A-Z]/gi;
  let xx = str.replaceAll(regall, ":");
  return xx;
};

let goodland = async () => {
  let res = await google.youtube("v3").videos.list({
    key: "AIzaSyDviVGMbMWyFxRGkWCRshq9jEOU-wuif-Y",
    part: ["snippet", "contentDetails", "statistics"],
    id: ["QY8dhl1EQfI"],
  });

  let items = res?.data?.items;
  let views = "0";
  let duration = "00:00";
  if (items) {
    let { statistics, contentDetails } = items[0];
    if (statistics?.viewCount) {
      views = statistics.viewCount;
    }
    if (contentDetails?.duration) {
      duration = convertDuration(contentDetails.duration);
    }
  }
  return { duration, views };
};

// .search.list({
//   type: ["video"],
// });
// console.log(goodland());
let dur = "PT11M34S";

convertDuration(dur);
