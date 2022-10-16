import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { RootState } from "../../../store";
import { editProfile } from "../../../core/redux/userSlice";
import { toast } from "react-toastify";
import customFetch from "../../../core/utils/axios";
import ClipLoader from "react-spinners/ClipLoader";

interface MyFormValues {
 fullName: string;
 phoneNumber: number | string;
 nationalId: number | string;
 birthDate: string;
 address?: string;
 profile?: string;
}
const EditProfile = () => {
 const { user } = useSelector((state: RootState) => state.user);
 const isAdmin = user.role === "student" ? undefined : user.role;
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const [newProfile, setNewProfile] = useState("");
 const [isUploading, setIsUploading] = useState<boolean>(false);

 const handleUpload = async (obj: any) => {
  const formData = new FormData();
  formData.append("image", obj);
  setIsUploading(true);
  const result = await customFetch.post("upload/image", formData);
  result.data.success === true && setNewProfile(result.data.result);
  result.data.success === true
   ? toast.success("آپلود عکس با موفقیت انجام شد")
   : toast.error("آپلود عکس با مشکل مواجه شد");
  setIsUploading(false);
 };

 const initialValues: MyFormValues = {
  fullName: user.fullName,
  phoneNumber: user.phoneNumber,
  nationalId: user.nationalId,
  birthDate: user.birthDate,
  address: isAdmin && user.address,
  profile: user.profile,
 };

 return (
  <div>
   <h1 className="font-bold text-lg mb-3">ویرایش حساب کاربری</h1>
   <hr />

   <Formik
    initialValues={initialValues}
    validationSchema={Yup.object().shape({
     fullName: Yup.string()
      .min(2, "نام باید حداقل دو کاراکتر باشد")
      .max(50, "نام باید حداکثر 50 کاراکتر باشد")
      .required("نام کامل خود را وارد کنید"),
     phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, "فقط مجاز به استفاده از اعداد می باشید")
      .min(11, "شماره وارد شده صحیح نمی باشد")
      .max(11, "شماره وارد شده صحیح نمی باشد")
      .required("شماره تماس خود را وارد کنید"),
     nationalId: Yup.string()
      .matches(/^[0-9]+$/, "فقط مجاز به استفاده از اعداد می باشید")
      .min(10, "شماره وارد شده صحیح نمی باشد")
      .max(10, "شماره وارد شده صحیح نمی باشد")
      .required("کد ملی خود را وارد کنید"),
     birthDate: Yup.string()
      .min(10, "تاریخ وارد شده صحیح نمی باشد")
      .max(10, "تاریخ وارد شده صحیح نمی باشد")
      .required("تاریخ تولد خود را وارد کنید"),
     address:
      isAdmin &&
      Yup.string()
       .min(5, "حداقل 5 کاراکتر")
       .max(100, "حداکثر 100 کاراکتر")
       .required("آدرس خود را وارد کنید"),
     profile: Yup.string().required("تصویر پروفایل را انتخاب کنید"),
    })}
    onSubmit={async (values) => {
     const id = user._id;
     const role = user.role === "student" ? "student" : "employee";
     console.log(newProfile);
     const obj = {
      fullName: values.fullName,
      email: user.email,
      phoneNumber: values.phoneNumber,
      nationalId: values.nationalId,
      birthDate: values.birthDate,
      address: isAdmin && values.address,
      profile: newProfile ? newProfile : user.profile,
     };
     dispatch(editProfile({ id, obj, role }));
    }}
   >
    {({ errors, touched, setTouched, setFieldValue, values }) => (
     <Form>
      <div className="md:child:w-1/2 md:child:inline-block child:my-4">
       <div>
        نام و نام خانوادگی
        <Field
         name="fullName"
         className="border shadow rounded block md:w-11/12 w-full h-10 indent-1 mt-1"
        />
        {errors.fullName && touched.fullName ? (
         <div className="text-xs text-red-600 indent-2">{errors.fullName}</div>
        ) : null}
       </div>
       <div>
        شماره موبایل
        <Field
         name="phoneNumber"
         className="border shadow rounded block md:w-11/12 w-full h-10 indent-1 mt-1"
        />
        {errors.phoneNumber && touched.phoneNumber ? (
         <div className="text-xs text-red-600 indent-2">
          {errors.phoneNumber}
         </div>
        ) : null}
       </div>
       <div>
        شماره ملی
        <Field
         name="nationalId"
         className="border shadow rounded block md:w-11/12 w-full h-10 indent-1 mt-1"
        />
        {errors.nationalId && touched.nationalId ? (
         <div className="text-xs text-red-600 indent-2">
          {errors.nationalId}
         </div>
        ) : null}
       </div>
       <div>
        تاریخ تولد
        <Field
         name="birthDate"
         className="border shadow rounded block md:w-11/12 w-full h-10 indent-1 mt-1"
        />
        {errors.birthDate && touched.birthDate ? (
         <div className="text-xs text-red-600 indent-2">{errors.birthDate}</div>
        ) : null}
       </div>
       {user.role !== "student" && (
        <div>
         آدرس
         <Field
          name="address"
          className="border shadow rounded block md:w-11/12 w-full h-10 indent-1 mt-1"
         />
         {errors.address && touched.address ? (
          <div className="text-xs text-red-600 indent-2">{errors.address}</div>
         ) : null}
        </div>
       )}

       <div className="">
        تصویر پروفایل
        <input
         name="profile"
         id="profile"
         type="file"
         hidden
         onChange={(e: any) => {
          setFieldValue("profile", e.target.files[0]);
          handleUpload(e.target.files[0]);
         }}
        />
        <label
         htmlFor="profile"
         className="block w-28 h-8 leading-8 text-center rounded bg-mydarkblue hover:bg-myblue text-white mr-3 cursor-pointer"
        >
         {isUploading ? (
          <ClipLoader
           color="#fff"
           size={20}
           className="mt-1"
           aria-label="Loading Spinner"
          />
         ) : (
          "انتخاب عکس"
         )}
        </label>
        {touched.profile && errors.profile && (
         <div className="text-xs text-red-600 indent-2">{errors.profile}</div>
        )}
        {newProfile && (
         <div className="w-40 h-40 rounded-full border mx-auto shadow-lg">
          <img
           src={newProfile}
           alt="پیش نمایش"
           className="w-full h-full rounded-full"
          />
         </div>
        )}
       </div>
      </div>
      <div className="mt-8 mx-auto w-56">
       <button
        type="submit"
        className="bg-mygreen hover:bg-mylightgreen rounded cursor-pointer text-center duration-200 p-3 text-white shadow"
       >
        ثبت تغییرات
       </button>
       <button
        onClick={() => {
         toast.error("تغییرات لغو شدند");
         navigate("/panel");
        }}
        type="submit"
        className="float-left bg-red-700 hover:bg-red-500 rounded cursor-pointer text-center duration-200 p-3 text-white shadow"
       >
        لغو تغییرات
       </button>
      </div>
     </Form>
    )}
   </Formik>
  </div>
 );
};

export default EditProfile;
