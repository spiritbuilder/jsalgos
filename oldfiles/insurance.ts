// let startMode = "Park";
// let startTime = new Date().getTime() - 1000000;
// let vehicleValue = 10000000;
// let markers = JSON.stringify([
//   { mode: "Park", startTime: new Date().getTime() + 200000 },
//   { mode: "Drive", startTime: new Date().getTime() + 500000 },
// ]);

// let endTime = new Date().getTime() + 900000;
// console.log((endTime - startTime) / 60000);
const toTwoDp = (num: number) => {
  return parseFloat(num.toFixed(2));
};
const calculateInsurance = (
  carValue: number | string = 0,
  minutes: number = 0,
  mode: string = "Drive"
) => {
  console.log(carValue, minutes, mode);
  let carVal = typeof carValue === "string" ? parseInt(carValue) : carValue;
  if (mode === "Park") {
    return parseFloat(((minutes * (0.1 * carVal)) / 525600).toFixed(2));
  } else {
    return parseFloat(((minutes * (0.4 * carVal)) / 525600).toFixed(2));
  }
};
let x = JSON.stringify([{ name: "string" }]);
const calculateDuplexInsurance = (
  startTime: number,
  startMode: string = "Drive",
  vehicleVal: number = 0,
  markers: { mode: string; startTime: number }[] = [],
  endTime: number
) => {
  let offset = new Date().getTimezoneOffset();
  console.log(offset);
  let description: any = {
    Park: {
      minutes: 0,
      amount: 0,
    },
    Drive: {
      minutes: 0,
      amount: 0,
    },
    total: 0,
  };

  if (!markers || markers.length < 1) {
    console.log(endTime, startTime);
    let difference = (endTime - startTime) / 60000;
    console.log(difference);
    let minutes = Math.ceil(difference);
    description[startMode].minutes = minutes;
    let total = toTwoDp(calculateInsurance(vehicleVal, minutes, startMode));
    description[startMode].amount = total;
    description.total = total;
  } else {
    let driveSecs = 0;
    let parkSecs = 0;
    for (let i = 0; i < markers.length; i++) {
      if (i === 0) {
        if (startMode === "Park") {
          parkSecs += markers[0].startTime - startTime;
        } else {
          driveSecs += markers[0].startTime - startTime;
        }
      } else {
        let difference = markers[i].startTime - markers[i - 1].startTime;
        console.log(difference)
        if (markers[i - 1].mode === "Park") {
          parkSecs += difference;
        } else {
          driveSecs += difference;
        }
      }
    }
    let len = markers.length;
    let mode = markers[len - 1].mode;
    if (mode === "Park") {
      parkSecs += endTime - markers[len - 1].startTime;
    } else {
      driveSecs += endTime - markers[len - 1].startTime;
    }
    let driveTotal = toTwoDp(
      calculateInsurance(vehicleVal, toTwoDp((driveSecs / 60000)), "Drive")
    );
    let parkTotal = toTwoDp(
      calculateInsurance(vehicleVal, toTwoDp(parkSecs / 60000), "Park")
    );
    let total = toTwoDp(driveTotal + parkTotal);
    description["Park"].minutes = toTwoDp(parkSecs / 60000);
    description["Drive"].minutes = toTwoDp(driveSecs / 60000);
    description["Drive"].amount = driveTotal;
    description["Park"].amount = parkTotal;
    description.total = total;
  }
  console.log(description);
  return description;
};

// console.log(
//   "I am testing this guy",
//   calculateDuplexInsurance(
//     startTime,
//     startMode,
//     vehicleValue,
//     JSON.parse(markers),
//     endTime
//   )
// );
// calculateDuplexInsurance(
//   startTime,
//   startMode,
//   vehicleValue,
//   JSON.parse(markers),
//   endTime
// );

// console.log(new Date().getTime());
// let yyy = 0;

// for (let i = 0; i < 9999999991500; i++) {
//   yyy += i ^ 2;
// }
// console.log(new Date().getTime());
export { calculateDuplexInsurance };

// import { me, another, makeSomethingHappen } from "./myClass";

// for (let i = 0; i < 2; i++) {
//   me.incrementAge();
//   another.incrementAge();
// }
// for (let i = 1; i < 7; i++) {
//   makeSomethingHappen(me, i);
// }

// const get12Am = (date: Date) => {
//   return new Date(date.getFullYear(), date.getMonth(), date.getDate());
// };

// console.log(get12Am(new Date()), new Date().getDate());

// let draw = [
//   {
//     _id: "638f5d04472078698a9f0d3a",
//     S3Key: "51073ae8-01f5-4f1d-8748-e7c28da992e8.pptx",
//     Bucket: "bnkle-professional-docs",
//     ContentType:
//       "application/vnd.openxmlformats-officedocument.presentationml.presentation",
//     project: "6384da00472078698a9f0524",
//     alias: "Architectural drawings",
//     folder: "drawings",
//     timestamp: "2022-12-06T15:17:24.046Z",
//     __v: 0,
//   },
//   {
//     _id: "638f5d74472078698a9f0d3e",
//     S3Key: "4de277f5-fd95-432d-ade1-83bebef40c43.jpeg",
//     Bucket: "bnkle-professional-docs",
//     ContentType: "image/jpeg",
//     project: "6384da00472078698a9f0524",
//     alias: "car1.jpeg",
//     folder: "drawings",
//     timestamp: "2022-12-06T15:19:16.707Z",
//     __v: 0,
//   },
//   {
//     _id: "638f5eb2472078698a9f0d41",
//     S3Key: "93492c4e-c3d7-42f5-b597-9229c7e49dd8.jpeg",
//     Bucket: "bnkle-professional-docs",
//     ContentType: "image/jpeg",
//     project: "6384da00472078698a9f0524",
//     alias: "car2.jpeg",
//     folder: "drawings",
//     timestamp: "2022-12-06T15:24:34.115Z",
//     __v: 0,
//   },
//   {
//     _id: "63908a03472078698a9f0d98",
//     S3Key: "0e4de538-65ef-4468-9a2a-91ff65a325b5.pdf",
//     Bucket: "bnkle-professional-docs",
//     ContentType: "application/pdf",
//     project: "6384da00472078698a9f0524",
//     alias: "Structural drawings",
//     folder: "drawings",
//     timestamp: "2022-12-07T12:41:39.168Z",
//     __v: 0,
//   },
//   {
//     _id: "63908cad472078698a9f0da0",
//     S3Key: "8107031a-4a28-4d23-9fa3-734af8d756d9.pdf",
//     Bucket: "bnkle-professional-docs",
//     ContentType: "application/pdf",
//     project: "6384da00472078698a9f0524",
//     alias: "Mechanical drawings",
//     folder: "drawings",
//     timestamp: "2022-12-07T12:53:01.438Z",
//     __v: 0,
//   },
// ];

// const filterForMedia = (folder: any[]) => {
//   let acc = folder.filter((m) => {
//     let filetype = m.ContentType.split("/")[0];
//     if (["image", "video"].includes(filetype)) {
//       return m;
//     }
//   });
//   return acc;
// };
// let filetered = filterForMedia(draw);
// const groupbyDate = (arr: any[]) => {
//   let acc: any = {};
//   for (let i = 0; i < arr.length; i++) {
//     let date = new Date(arr[i].timestamp).toDateString();
//     if (acc[date]) {
//       acc[date].push(arr[i]);
//     } else {
//       acc[date] = [arr[i]];
//     }
//   }
//   return acc;
// };

// let date = new Date("2022-12-07T12:53:01.438Z");

// console.log(
//   draw.length,
//   filetered.length,
//   "see",
//   filetered,
//   groupbyDate(filetered)
// );
// console.log(date.toDateString());

// const inRange = (start: Date, end: Date, date: Date) => {
//   console.log(start);
//   if (start.getTime() <= date.getTime() && end.getTime() >= date.getTime()) {
//     return true;
//   } else {
//     return false;
//   }
// };
// const isWeek = (date = new Date(), time = "this") => {
//   let today = new Date();
//   let datenumber = today.getDate();
//   let monthNumber = today.getMonth();
//   let weekday = today.getDay();
//   console.log(datenumber, weekday, monthNumber);
//   let weekstart =
//     new Date(today.getFullYear(), monthNumber, datenumber).getTime() -
//     weekday * 24 * 60 * 60000;
//   let weekend = weekstart + 7 * 24 * 60 * 60000;
//   if (time === "lastweek") {
//     weekend = weekstart;
//     weekstart = new Date(weekend).getTime() - 7 * 24 * 60 * 60000;
//   }
//   console.log(weekstart);
//   return inRange(new Date(weekstart), new Date(weekend), date);
// };

// const islastMonth = (date = new Date()) => {
//   let today = new Date().getMonth();
//   if (today - 1 === date.getMonth()) {
//     return true;
//   }
//   return false;
// };

// console.log(isWeek(new Date(), "lastweek"));
// console.log(islastMonth(new Date(2022, 8, 4)));
