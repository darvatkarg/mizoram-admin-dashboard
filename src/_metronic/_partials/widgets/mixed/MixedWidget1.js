import React, { useMemo, useEffect, useState } from "react";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import { useHistory, Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useHtmlClassService } from "../../../layout";
import { DropdownMenu2 } from "../../dropdowns";
import { ApiGet, BaseURL } from "../../../../helpers/API/ApiData";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../_helpers";
import img1 from "./Images/window.png";
import "./index.css";
import { Spin } from "antd";

export function MixedWidget1({ className }) {
  const uiService = useHtmlClassService();
  const [loader, setLoader] = useState(true);

  const history = useHistory();
  const [accountdata, setaccountdata] = useState({});

  const layoutProps = useMemo(() => {
    return {
      colorsGrayGray500: objectPath.get(
        uiService.config,
        "js.colors.gray.gray500"
      ),
      colorsGrayGray200: objectPath.get(
        uiService.config,
        "js.colors.gray.gray200"
      ),
      colorsGrayGray300: objectPath.get(
        uiService.config,
        "js.colors.gray.gray300"
      ),
      colorsThemeBaseDanger: objectPath.get(
        uiService.config,
        "js.colors.theme.base.danger"
      ),
      fontFamily: objectPath.get(uiService.config, "js.fontFamily"),
    };
  }, [uiService]);

  const downloadFile = () => {
    window.location.href =
      "https://katechnologiesgh.s3.eu-central-1.amazonaws.com/ebook_admin.exe";
  };

  useEffect(() => {
    chartfun(layoutProps);
  }, [layoutProps]);
  // const chartfun = async (layoutProps) => {
  //   const Id2 = JSON.parse(localStorage.getItem("token"));

  //   let productValue = await ApiGet("post/admin_dashboard");
  //   let extra = [];
  //   let extra1 = [];
  //   (async () => {
  //     extra = Object.values(productValue.data.data.year);
  //     extra1 = Object.keys(productValue.data.data.year);
  //   })();
  //   const element = document.getElementById("kt_mixed_widget_1_chart");
  //   if (!element) {
  //     return;
  //   }

  //   const options = getChartOptions(layoutProps, extra, extra1);

  //   const chart = new ApexCharts(element, options);
  //   chart.render();
  //   return function cleanUp() {
  //     chart.destroy();
  //   };
  // };
  const chartfun = async (layoutProps) => {};

  useEffect(() => {
    ApiGet("/home")
      .then((res) => {
        setLoader(false);
        setaccountdata(res.data.data);
        console.log("accountdata", res.data.data);
      })
      .catch((err) => {
        if (err.status == 410) {
          history.push("/bookList");
        } else {
          alert(err.message);
        }
      });
  }, []);

  return (
    <div className={`card card-custom bg-gray-100 ${className}`}>
      <div className="card-body p-0 position-relative overflow-hidden">
        <div className="card-spacer ">
          {loader ? (
            <>
              <div
                style={{ minHeight: "60vh" }}
                className="d-flex mt-5 mb-5 align-items-center justify-content-center text-center"
              >
                <Spin />
              </div>
            </>
          ) : (
            <>
              <div className="row">
                <div class="col-lg-6 col-xxl-6">
                  <div class="card card-custom bg-gray-100 card-stretch gutter-b">
                    <div class="card-body p-0 position-relative bg-white rounded overflow-hidden">
                      <div
                        id="kt_mixed_widget_1_chart"
                        class="card-rounded-bottom bg-danger"
                        // style="height: 200px"
                      ></div>

                      <div class="card-spacer ">
                        <div class="row m-0">
                          <div class="col bg-light-warning px-6 py-8 rounded-lg mr-7 mb-7">
                            <span class="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <polygon points="0 0 24 0 24 24 0 24" />
                                  <path
                                    d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                                    fill="#000000"
                                    fill-rule="nonzero"
                                    opacity="0.3"
                                  />
                                  <path
                                    d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                                    fill="#000000"
                                    fill-rule="nonzero"
                                  />
                                </g>
                              </svg>
                            </span>{" "}
                            <div className="d-flex justify-content-between align-items-center">
                              <a class="text-warning font-weight-bold font-size-h6">
                                Users
                              </a>
                              <a
                                class="text-warning font-weight-bold "
                                style={{ fontSize: "24px" }}
                              >
                                {accountdata?.users || 0}
                              </a>
                            </div>
                          </div>
                          <div class="col bg-light-primary px-6 py-8 rounded-lg mb-7">
                            <span class="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
                              <SVG
                                src={toAbsoluteUrl(
                                  "/media/svg/icons/Home/Book.svg"
                                )}
                              />
                            </span>{" "}
                            <div className="d-flex justify-content-between align-items-center">
                              <a class="text-primary font-weight-bold font-size-h6 mt-2">
                                Books
                              </a>
                              <a
                                class="text-primary font-weight-bold mt-2"
                                style={{ fontSize: "24px" }}
                              >
                                {accountdata?.books || 0}
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="row m-0">
                          <div class="col bg-light-danger px-6 py-8 mr-7 rounded-lg">
                            <span class="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <polygon points="0 0 24 0 24 24 0 24" />
                                  <path
                                    d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z"
                                    fill="#000000"
                                    fill-rule="nonzero"
                                  />
                                  <path
                                    d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                            </span>{" "}
                            <div className="d-flex justify-content-between align-items-center">
                              <a class="text-danger font-weight-bold font-size-h6 mt-2">
                                Total Publishers
                              </a>
                              <a
                                class="text-danger font-weight-bold mt-2"
                                style={{ fontSize: "24px" }}
                              >
                                {accountdata?.auditor || 0}
                              </a>
                            </div>
                          </div>
                          <div class="col bg-light-success px-6 py-8 rounded-lg">
                            <span class="svg-icon svg-icon-3x svg-icon-success d-block my-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <polygon points="0 0 24 0 24 24 0 24" />
                                  <path
                                    d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z"
                                    fill="#000000"
                                    fill-rule="nonzero"
                                  />
                                  <path
                                    d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                            </span>{" "}
                            <div className="d-flex justify-content-between align-items-center">
                              <a class="text-success font-weight-bold font-size-h6 mt-2">
                                Total Visitors
                              </a>
                              <a
                                class="text-success font-weight-bold mt-2"
                                style={{ fontSize: "24px" }}
                              >
                                {accountdata?.visitors || 0}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xxl-6">
                  <div class="card card-custom bg-gray-100 card-stretch gutter-b">
                    <div class="card-body p-0 position-relative bg-white rounded overflow-hidden">
                      <div
                        id="kt_mixed_widget_1_chart"
                        class="card-rounded-bottom bg-danger"
                        // style="height: 200px"
                      ></div>

                      <div class="card-spacer ">
                        <div class="row m-0">
                          <div class="col bg-light-success px-6 py-8 rounded-lg mb-7">
                            <span class="svg-icon svg-icon-3x svg-icon-success d-block my-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <rect x="0" y="0" width="24" height="24" />
                                  <path
                                    d="M12.7037037,14 L15.6666667,10 L13.4444444,10 L13.4444444,6 L9,12 L11.2222222,12 L11.2222222,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L12.7037037,14 Z"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                  <path
                                    d="M9.80428954,10.9142091 L9,12 L11.2222222,12 L11.2222222,16 L15.6666667,10 L15.4615385,10 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9.80428954,10.9142091 Z"
                                    fill="#000000"
                                  />
                                </g>
                              </svg>
                            </span>{" "}
                            <div className="d-flex justify-content-between">
                              <a class="text-success font-weight-bold font-size-h6 mt-2">
                                Main Category
                              </a>
                              <a
                                class="text-success font-weight-bold mt-2"
                                style={{ fontSize: "24px" }}
                              >
                                {accountdata?.main_category || 0}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="row m-0">
                          <div class="col bg-light-warning px-6 py-8 rounded-lg">
                            <span class="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <rect x="0" y="0" width="24" height="24" />
                                  <rect
                                    fill="#000000"
                                    opacity="0.3"
                                    x="13"
                                    y="4"
                                    width="3"
                                    height="16"
                                    rx="1.5"
                                  />
                                  <rect
                                    fill="#000000"
                                    x="8"
                                    y="9"
                                    width="3"
                                    height="11"
                                    rx="1.5"
                                  />
                                  <rect
                                    fill="#000000"
                                    x="18"
                                    y="11"
                                    width="3"
                                    height="9"
                                    rx="1.5"
                                  />
                                  <rect
                                    fill="#000000"
                                    x="3"
                                    y="13"
                                    width="3"
                                    height="7"
                                    rx="1.5"
                                  />
                                </g>
                              </svg>
                            </span>{" "}
                            <div className="d-flex justify-content-between">
                              <a class="text-warning font-weight-bold font-size-h6">
                                Category
                              </a>
                              <a
                                class="text-warning font-weight-bold "
                                style={{ fontSize: "24px" }}
                              >
                                {accountdata?.category || 0}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="card card-custom gutter-b">
                    <div class="card-body p-0">
                      <div class="d-flex align-items-center justify-content-between card-spacer flex-grow-1">
                        <span class="symbol  symbol-50 symbol-light-success mr-2">
                          <span class="symbol-label">
                            <span class="svg-icon svg-icon-xl svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <rect x="0" y="0" width="24" height="24" />
                                  <rect
                                    fill="#000000"
                                    x="4"
                                    y="4"
                                    width="7"
                                    height="7"
                                    rx="1.5"
                                  />
                                  <path
                                    d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                            </span>{" "}
                          </span>
                        </span>
                        <div class="d-flex flex-column text-right">
                          <span class="text-dark-75 font-weight-bolder font-size-h3">
                            {accountdata?.today_downloads || 0}
                          </span>
                          <span class="text-muted font-weight-bold mt-2">
                            Downloads Today
                          </span>
                        </div>
                      </div>
                      <div
                        id="kt_stats_widget_11_chart"
                        class="card-rounded-bottom"
                        data-color="success"
                        // style="height: 150px"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div class="card card-custom  gutter-b">
                    <div class="card-body p-0">
                      <div class="d-flex align-items-center justify-content-between card-spacer flex-grow-1">
                        <span class="symbol  symbol-50 symbol-light-primary mr-2">
                          <span class="symbol-label">
                            <span class="svg-icon svg-icon-xl svg-icon-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <polygon points="0 0 24 0 24 24 0 24" />
                                  <path
                                    d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                                    fill="#000000"
                                    fill-rule="nonzero"
                                    opacity="0.3"
                                  />
                                  <path
                                    d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                                    fill="#000000"
                                    fill-rule="nonzero"
                                  />
                                </g>
                              </svg>
                            </span>{" "}
                          </span>
                        </span>
                        <div class="d-flex flex-column text-right">
                          <span class="text-dark-75 font-weight-bolder font-size-h3">
                            {accountdata?.month_downloads || 0}
                          </span>
                          <span class="text-muted font-weight-bold mt-2">
                            Monthly Downloads
                          </span>
                        </div>
                      </div>
                      <div
                        id="kt_stats_widget_12_chart"
                        class="card-rounded-bottom"
                        data-color="primary"
                        // style="height: 150px"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function getChartOptions(layoutProps, name, value) {
  const strokeColor = "#D13647";

  const options = {
    series: [
      {
        name: "Post",
        data: name,
      },
    ],
    chart: {
      type: "area",
      height: 200,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 5,
        left: 0,
        blur: 3,
        color: strokeColor,
        opacity: 0.5,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "solid",
      opacity: 0,
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: [strokeColor],
    },
    xaxis: {
      categories: value,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily,
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: layoutProps.colorsGrayGray300,
          width: 1,
          dashArray: 3,
        },
      },
    },
    yaxis: {
      min: 0,
      max: 500,
      labels: {
        show: false,
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily,
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: layoutProps.fontFamily,
      },
      y: {
        formatter: function(val) {
          return val;
        },
      },
      marker: {
        show: false,
      },
    },
    colors: ["transparent"],
    markers: {
      colors: layoutProps.colorsThemeBaseDanger,
      strokeColor: [strokeColor],
      strokeWidth: 3,
    },
  };
  return options;
}
