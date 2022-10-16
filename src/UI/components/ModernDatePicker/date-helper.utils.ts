import jalaali from "jalaali-js";

export const ConvertUtcToDate = (utc:any) => {
  let date;
  if (utc) {
    date = utc.split("/");
  } else date = new Date(utc);
  const newDate = {
    day: utc ? +date[2] : date.getDate(),
    month: utc ? +date[1] : date.getMonth() + 1,
    year: utc ? +date[0] : date.getFullYear(),
  };

  return newDate;
};

export const getCustomDate = (utc:any) => {
  const date = new Date(utc);
  return (
    date.getFullYear() +
    "/" +
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) +
    "/" +
    (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
  );
};

export const getCurrentJalaliDate = () => {
  const date = new Date();
  const newDate = toJalali(date);
  return {
    day: newDate.jd,
    month: newDate.jm,
    year: newDate.jy,
  };
};

export const toJalali = (date:any) => {
  return jalaali.toJalaali(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  );
};

export const ConvertObjToStringDate = (date:any) => {
  let birthDate = "";
  const { day, month, year } = date;
  birthDate =
    year +
    "/" +
    (month < 10 ? "0" + month : month) +
    "/" +
    (day < 10 ? "0" + day : day);
  return birthDate;
};

export const ConvertStringDateToObj = (date:any, hasMaxDate = false) => {
  if (!date) return null;
  try {
    const curDateObj = ConvertObjToStringDate(getCurrentJalaliDate()).split(
      "/"
    );
    const dateObj = date.split("/");
    if (
      dateObj[0].includes("_") ||
      dateObj[1].includes("_") ||
      dateObj[2].includes("_")
    ) {
      return null;
    } else if (
      +dateObj[1] > 12 ||
      +dateObj[1] < 1 ||
      (+dateObj[1] > 6 && +dateObj[2] > 30) ||
      (+dateObj[1] < 7 && +dateObj[2] > 31) ||
      +dateObj[2] < 1
    ) {
      return null;
    } else if (
      hasMaxDate &&
      (+dateObj[0] > +curDateObj[0] ||
        (+dateObj[0] === +curDateObj[0] && +dateObj[1] > +curDateObj[1]) ||
        (+dateObj[0] === +curDateObj[0] &&
          +dateObj[1] === +curDateObj[1] &&
          +dateObj[2] > +curDateObj[2]))
    ) {
      return null;
    } else {
      return ConvertUtcToDate(date);
    }
  } catch (error) {}
};

export const CheckMaximumDate = (date:any, nullable = false, hasNoMax = false) => {
  if (nullable && !date) return true;
  try {
    const curDateObj = ConvertObjToStringDate(getCurrentJalaliDate()).split(
      "/"
    );

    const dateObj = date.split("/");

    if (
      !hasNoMax &&
      (+dateObj[0] > +curDateObj[0] ||
        (+dateObj[0] === +curDateObj[0] && +dateObj[1] > +curDateObj[1]) ||
        (+dateObj[0] === +curDateObj[0] &&
          +dateObj[1] === +curDateObj[1] &&
          +dateObj[2] > +curDateObj[2]))
    ) {
      return false;
    } else if (
      +dateObj[1] > 12 ||
      +dateObj[1] < 1 ||
      (+dateObj[1] > 6 && +dateObj[2] > 30) ||
      (+dateObj[1] < 7 && +dateObj[2] > 31) ||
      +dateObj[2] < 1
    ) {
      return false;
    } else if (
      dateObj[0].includes("_") ||
      dateObj[1].includes("_") ||
      dateObj[2].includes("_")
    )
      return false;
    else return true;
  } catch (error) {
    return false;
  }
};

export const ReplaceWrongDate = (date:any, hasMaxDate = false, minDate:any) => {
  const dateObj = date.split("/");
  const curDateObj = ConvertObjToStringDate(getCurrentJalaliDate()).split("/");

  const gregorian = jalaali.toGregorian(
    +dateObj[0] > +curDateObj[0] + 50
      ? +curDateObj + 50
      : +dateObj[0] < +curDateObj[0] - 100
      ? +curDateObj[0] - 100
      : +dateObj[0] - 1,
    +dateObj[1] > 12 ? 12 : +dateObj[1] < 1 ? 1 : +dateObj[1],
    +dateObj[2] > 31 ? 31 : +dateObj[2] < 1 ? 1 : +dateObj[2]
  );

  const leapYear =
    (gregorian.gy % 4 === 0 && gregorian.gy % 100 !== 0) ||
    gregorian.gy % 400 === 0;

  if (!hasMaxDate && +dateObj[0] > +curDateObj[0] + 50) {
    dateObj[0] = String(+curDateObj[0] + 50);
  }

  if (hasMaxDate && +dateObj[0] > +curDateObj[0]) {
    dateObj[0] = curDateObj[0];
  }
  if (+dateObj[0] < +curDateObj[0] - 100) {
    if (dateObj[0]) {
      dateObj[0] = String(+curDateObj[0] - 100);
    } else return "";
  }
  if (+dateObj[1] < 1) {
    dateObj[1] = "01";
  }
  if (+dateObj[1] > 12) {
    dateObj[1] = "12";
  }
  if (+dateObj[2] < 1) {
    dateObj[2] = "01";
  }
  if (+dateObj[1] > 6 && +dateObj[2] > 30) {
    dateObj[2] = "30";
  }
  if (+dateObj[1] === 12 && (leapYear ? +dateObj[2] > 30 : +dateObj[2] > 29)) {
    dateObj[2] = leapYear ? "30" : "29";
  }
  if (+dateObj[1] < 7 && +dateObj[2] > 31) {
    dateObj[2] = "31";
  }
  if (
    hasMaxDate &&
    +dateObj[0] === +curDateObj[0] &&
    +dateObj[1] > +curDateObj[1]
  ) {
    dateObj[1] = curDateObj[1];
  }
  if (
    hasMaxDate &&
    +dateObj[0] === +curDateObj[0] &&
    +dateObj[1] === +curDateObj[1] &&
    +dateObj[2] > +curDateObj[2]
  ) {
    dateObj[2] = curDateObj[2];
  }

  if (minDate) {
    if (+dateObj[0] < minDate.year) {
      dateObj[0] = minDate.year.toString();
    }
    if (+dateObj[0] === minDate.year && +dateObj[1] < minDate.month) {
      dateObj[1] =
        minDate.month < 10 ? "0" + minDate.month : minDate.month.toString();
    }
    if (
      +dateObj[0] === minDate.year &&
      +dateObj[1] === minDate.month &&
      +dateObj[2] < minDate.day
    ) {
      dateObj[2] =
        minDate.day < 10 ? "0" + minDate.day : minDate.day.toString();
    }
  }

  return dateObj[0] + "/" + dateObj[1] + "/" + dateObj[2];
};

export const CheckGreaterDate = (date1:any, date2:any) => {
  const dateObj1 = date1.split("/");
  const dateObj2 = date2.split("/");

  if (dateObj1[0] > dateObj2[0]) return true;

  if (dateObj1[0] === dateObj2[0] && dateObj1[1] > dateObj2[1]) return true;

  if (
    dateObj1[0] === dateObj2[0] &&
    dateObj1[1] === dateObj2[1] &&
    dateObj1[2] >= dateObj2[2]
  )
    return true;

  return false;
};

export const GetLastYears = (number:any) => {
  let today = new Date();

  let jalaliDate = jalaali.toJalaali(today);
  let jYears = [];
  let jYear = jalaliDate.jy;
  for (let i = 0; i < number; i++) {
    jYears.push(jYear);
    jYear = jYear - 1;
  }

  return jYears;
};
