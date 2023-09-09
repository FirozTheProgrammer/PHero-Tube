const loadData = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await response.json();
  loadCategory(data);
};

const loadCategory = (data) => {
  const tabContainer = document.getElementById("tab-container");
  data.data.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <a  class="tab text-[#252525b3] text-base mx-2 px-5 bg-[#25252526] rounded font-medium" onclick="loadVideos('${element.category_id}')" >${element.category}</a>`;
    tabContainer.appendChild(div);
  });
};

const loadVideos = async (categoryId) => {
  const response = await fetch(
    ` https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await response.json();
  loadCard(data);
};

const loadCard = (data) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.textContent = " ";

  const notFoundContainer = document.getElementById("not-found-container");
  notFoundContainer.textContent = " ";
  const emtyData = `${data.status ? "true" : "false"}`;

  if (emtyData === "false") {
    const notFound = document.createElement("div");
    notFound.innerHTML = `
          <div class="flex flex-col items-center space-y-8 ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="140"
            viewBox="0 0 140 140"
            fill="none"
          >
            <g clip-path="url(#clip0_11_676)">
              <path
                d="M70.0001 3.53239C33.291 3.53239 3.53247 33.2909 3.53247 70C3.53247 106.709 33.291 136.467 69.9998 136.467C106.709 136.467 136.467 106.709 136.467 70C136.468 33.2909 106.709 3.53239 70.0001 3.53239Z"
                fill="url(#paint0_linear_11_676)"
              />
              <path
                d="M29.4639 83.5424L16.8364 70.9149V66.7973H29.4639V83.5424Z"
                fill="url(#paint1_linear_11_676)"
              />
              <path
                d="M91.3211 45.0196L80.0662 56.2718V33.7647L91.3211 45.0196Z"
                fill="url(#paint2_linear_11_676)"
              />
              <path
                d="M136.467 70C136.467 88.3537 129.028 104.973 116.999 116.999C104.973 129.028 88.3538 136.467 70.0001 136.467C53.5789 136.467 38.5495 130.513 26.9514 120.642L120.642 26.9514C130.513 38.5494 136.467 53.5788 136.467 70Z"
                fill="url(#paint3_linear_11_676)"
              />
              <path
                d="M119.497 20.5031C106.828 7.83451 89.331 0 70 0C31.3408 0 0 31.3408 0 70C0 89.331 7.83451 106.828 20.5031 119.497C33.1718 132.165 50.669 140 70 140C89.331 140 106.828 132.165 119.497 119.497C132.165 106.828 140 89.331 140 70C140 50.669 132.165 33.1718 119.497 20.5031ZM110.18 110.18C99.8969 120.463 85.691 126.824 70 126.824C54.309 126.824 40.1031 120.463 29.82 110.18C19.5369 99.8969 13.1765 85.691 13.1765 70C13.1765 38.618 38.618 13.1765 70 13.1765C85.691 13.1765 99.8969 19.5369 110.18 29.82C120.463 40.1031 126.824 54.309 126.824 70C126.824 85.691 120.463 99.8969 110.18 110.18Z"
                fill="url(#paint4_linear_11_676)"
              />
              <path
                d="M24.5793 115.421C36.2045 127.046 52.2622 134.022 70 134.235C106.117 134.669 135.319 106.208 134.235 70C133.704 52.2689 127.046 36.2048 115.421 24.5793C103.795 12.9538 87.7391 5.7647 70 5.7647C52.2609 5.7647 36.2045 12.9541 24.5793 24.5793C12.9541 36.2048 5.76465 52.2609 5.76465 70C5.76465 87.7391 12.9541 103.795 24.5793 115.421ZM29.8199 29.82C40.1031 19.5369 54.309 13.1765 70 13.1765C85.6909 13.1765 99.8968 19.5369 110.18 29.82C120.463 40.1031 126.823 54.309 126.823 70C126.823 101.382 101.382 126.824 70 126.824C54.309 126.824 40.1031 120.463 29.8199 110.18C19.5368 99.8969 13.1764 85.691 13.1764 70C13.1764 54.309 19.5368 40.1031 29.8199 29.82Z"
                fill="url(#paint5_linear_11_676)"
              />
              <path
                d="M134.235 70C133.763 54.2053 128.423 39.7364 119.046 28.5465L113.797 33.7957C121.933 43.627 126.824 56.2424 126.824 70C126.824 101.382 101.382 126.824 70 126.824C56.2424 126.824 43.627 121.933 33.7957 113.797L28.5408 119.052C39.7303 128.484 54.1967 134.045 70 134.235C106.117 134.669 135.319 106.208 134.235 70Z"
                fill="url(#paint6_linear_11_676)"
              />
              <path
                d="M44.6536 35.5471C44.6536 37.7201 46.4151 39.4816 48.5881 39.4816H70.8739C72.261 39.4816 73.3857 40.606 73.3857 41.9934V51.1148H81.2548V36.9067C81.2548 33.9827 78.8844 31.6125 75.9606 31.6125H48.5881C46.4151 31.6125 44.6536 33.3741 44.6536 35.5471Z"
                fill="url(#paint7_linear_11_676)"
              />
              <path
                d="M32.5437 59.0836L20.6368 52.9266C18.1805 51.6564 15.2515 53.4394 15.2515 56.2045V68.0147C15.2515 70.7799 18.1805 72.5628 20.6368 71.2927L32.5437 65.1357C34.9994 63.8658 34.9994 60.3537 32.5437 59.0836Z"
                fill="url(#paint8_linear_11_676)"
              />
              <path
                d="M88.9192 66.4275L116.901 51.9581C120.48 50.1074 124.749 52.7053 124.749 56.7349V88.6603C124.749 92.6899 120.48 95.2878 116.901 93.4371L88.9192 78.9677C83.8306 76.3362 83.8306 69.0587 88.9192 66.4275Z"
                fill="url(#paint9_linear_11_676)"
              />
              <path
                d="M99.5949 60.9069L88.919 66.4275C83.8304 69.059 83.8304 76.3362 88.919 78.9674L116.901 93.4368C120.48 95.2876 124.748 92.6896 124.748 88.6601V86.0605L99.5949 60.9069Z"
                fill="url(#paint10_linear_11_676)"
              />
              <path
                d="M87.4114 102.165H37.483C30.8245 102.165 25.4265 96.7672 25.4265 90.1087V55.2863C25.4265 48.6278 30.8245 43.2298 37.483 43.2298H87.4114C94.0699 43.2298 99.4678 48.6278 99.4678 55.2863V90.1089C99.4678 96.7675 94.0699 102.165 87.4114 102.165Z"
                fill="url(#paint11_linear_11_676)"
              />
              <path
                d="M87.4113 102.165C94.0698 102.165 99.4677 96.7672 99.4677 90.1087V55.2863C99.4677 53.2162 98.9453 51.2685 98.0266 49.5666L45.4277 102.165H87.4113V102.165Z"
                fill="url(#paint12_linear_11_676)"
              />
              <path
                d="M25.4265 78.3819V90.1087C25.4265 96.7672 30.8245 102.165 37.483 102.165H87.4114C94.0699 102.165 99.4678 96.7672 99.4678 90.1087V78.3819H25.4265Z"
                fill="url(#paint13_linear_11_676)"
              />
              <path
                d="M71.1166 66.5667H37.4063C34.7381 66.5667 32.5752 64.4038 32.5752 61.7356V56.3912C32.5752 53.7229 34.7381 51.5601 37.4063 51.5601H71.1166C73.7849 51.5601 75.9477 53.7229 75.9477 56.3912V61.7356C75.9477 64.4038 73.7846 66.5667 71.1166 66.5667Z"
                fill="url(#paint14_linear_11_676)"
              />
              <path
                d="M45.377 55.1831L37.5249 63.0354L47.7131 73.2236H63.4175L45.377 55.1831Z"
                fill="url(#paint15_linear_11_676)"
              />
              <path
                d="M41.4509 64.6616C44.5175 64.6616 47.0035 62.1757 47.0035 59.1091C47.0035 56.0425 44.5175 53.5566 41.4509 53.5566C38.3844 53.5566 35.8984 56.0425 35.8984 59.1091C35.8984 62.1757 38.3844 64.6616 41.4509 64.6616Z"
                fill="url(#paint16_linear_11_676)"
              />
              <path
                d="M62.2593 55.1831L54.4072 63.0354L64.5954 73.2236H80.2998L62.2593 55.1831Z"
                fill="url(#paint17_linear_11_676)"
              />
              <path
                d="M58.3333 64.6616C61.3998 64.6616 63.8858 62.1757 63.8858 59.1091C63.8858 56.0425 61.3998 53.5566 58.3333 53.5566C55.2667 53.5566 52.7808 56.0425 52.7808 59.1091C52.7808 62.1757 55.2667 64.6616 58.3333 64.6616Z"
                fill="url(#paint18_linear_11_676)"
              />
              <path
                d="M108.821 16.8145L16.8145 108.821L31.1785 123.185L123.185 31.1785L108.821 16.8145Z"
                fill="url(#paint19_linear_11_676)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_11_676"
                x1="45.0197"
                y1="45.0196"
                x2="95.2618"
                y2="95.2618"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#EFE2DD" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_11_676"
                x1="34.1536"
                y1="79.8596"
                x2="17.7703"
                y2="63.4763"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E1D3CE" stop-opacity="0" />
                <stop
                  offset="0.3157"
                  stop-color="#D0C4C0"
                  stop-opacity="0.316"
                />
                <stop
                  offset="0.9401"
                  stop-color="#A39C9B"
                  stop-opacity="0.94"
                />
                <stop offset="1" stop-color="#9E9797" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_11_676"
                x1="91.5418"
                y1="53.0833"
                x2="68.7575"
                y2="37.0704"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E1D3CE" stop-opacity="0" />
                <stop
                  offset="0.3157"
                  stop-color="#D0C4C0"
                  stop-opacity="0.316"
                />
                <stop
                  offset="0.9401"
                  stop-color="#A39C9B"
                  stop-opacity="0.94"
                />
                <stop offset="1" stop-color="#9E9797" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_11_676"
                x1="90.8628"
                y1="90.8628"
                x2="77.0934"
                y2="77.0933"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E1D3CE" stop-opacity="0" />
                <stop
                  offset="0.3157"
                  stop-color="#D0C4C0"
                  stop-opacity="0.316"
                />
                <stop
                  offset="0.9401"
                  stop-color="#A39C9B"
                  stop-opacity="0.94"
                />
                <stop offset="1" stop-color="#9E9797" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_11_676"
                x1="25.5294"
                y1="25.5294"
                x2="114.714"
                y2="114.714"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FE646F" />
                <stop offset="1" stop-color="#CA2E43" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_11_676"
                x1="111.323"
                y1="111.323"
                x2="28.9942"
                y2="28.9943"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FE646F" />
                <stop offset="1" stop-color="#CA2E43" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_11_676"
                x1="85.6443"
                y1="85.6501"
                x2="74.9349"
                y2="74.9406"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CA2E43" stop-opacity="0" />
                <stop
                  offset="0.6086"
                  stop-color="#A8283B"
                  stop-opacity="0.609"
                />
                <stop offset="1" stop-color="#972437" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_11_676"
                x1="62.954"
                y1="33.8086"
                x2="62.954"
                y2="50.1156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7A8C98" />
                <stop offset="1" stop-color="#465A61" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_11_676"
                x1="24.1873"
                y1="63.9243"
                x2="27.2272"
                y2="69.5701"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#465A61" />
                <stop offset="1" stop-color="#444444" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_11_676"
                x1="113.993"
                y1="72.6976"
                x2="128.924"
                y2="72.6976"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#465A61" />
                <stop offset="1" stop-color="#444444" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_11_676"
                x1="116.739"
                y1="77.476"
                x2="91.0146"
                y2="77.476"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#465A61" stop-opacity="0" />
                <stop
                  offset="0.4733"
                  stop-color="#454E51"
                  stop-opacity="0.473"
                />
                <stop offset="1" stop-color="#444444" />
              </linearGradient>
              <linearGradient
                id="paint11_linear_11_676"
                x1="50.8247"
                y1="52.6812"
                x2="73.7405"
                y2="92.1472"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7A8C98" />
                <stop offset="1" stop-color="#465A61" />
              </linearGradient>
              <linearGradient
                id="paint12_linear_11_676"
                x1="83.3946"
                y1="87.5335"
                x2="74.8607"
                y2="78.9995"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#465A61" stop-opacity="0" />
                <stop
                  offset="0.4733"
                  stop-color="#454E51"
                  stop-opacity="0.473"
                />
                <stop offset="1" stop-color="#444444" />
              </linearGradient>
              <linearGradient
                id="paint13_linear_11_676"
                x1="62.4472"
                y1="89.3623"
                x2="62.4472"
                y2="102.237"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#465A61" stop-opacity="0" />
                <stop
                  offset="0.4733"
                  stop-color="#454E51"
                  stop-opacity="0.473"
                />
                <stop offset="1" stop-color="#444444" />
              </linearGradient>
              <linearGradient
                id="paint14_linear_11_676"
                x1="54.2615"
                y1="68.3969"
                x2="54.2615"
                y2="48.4282"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7A8C98" />
                <stop offset="1" stop-color="#465A61" />
              </linearGradient>
              <linearGradient
                id="paint15_linear_11_676"
                x1="49.6445"
                y1="67.242"
                x2="36.6053"
                y2="53.242"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#465A61" stop-opacity="0" />
                <stop
                  offset="0.4733"
                  stop-color="#454E51"
                  stop-opacity="0.473"
                />
                <stop offset="1" stop-color="#444444" />
              </linearGradient>
              <linearGradient
                id="paint16_linear_11_676"
                x1="37.9737"
                y1="55.6322"
                x2="44.4725"
                y2="62.1309"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CCFC5C" />
                <stop offset="0.1591" stop-color="#C6F95A" />
                <stop offset="0.3653" stop-color="#B6F053" />
                <stop offset="0.5975" stop-color="#9BE248" />
                <stop offset="0.8469" stop-color="#76CF38" />
                <stop offset="1" stop-color="#5CC12D" />
              </linearGradient>
              <linearGradient
                id="paint17_linear_11_676"
                x1="66.492"
                y1="67.0273"
                x2="57.1586"
                y2="55.0862"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#465A61" stop-opacity="0" />
                <stop
                  offset="0.4733"
                  stop-color="#454E51"
                  stop-opacity="0.473"
                />
                <stop offset="1" stop-color="#444444" />
              </linearGradient>
              <linearGradient
                id="paint18_linear_11_676"
                x1="54.8561"
                y1="55.6322"
                x2="61.3548"
                y2="62.1309"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFDD00" />
                <stop offset="1" stop-color="#FFB000" />
              </linearGradient>
              <linearGradient
                id="paint19_linear_11_676"
                x1="25.5293"
                y1="25.5294"
                x2="114.714"
                y2="114.714"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FE646F" />
                <stop offset="1" stop-color="#CA2E43" />
              </linearGradient>
              <clipPath id="clip0_11_676">
                <rect width="140" height="140" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2 class="text-[#171717] text-center text-4xl font-bold">
          Oops!! Sorry, There is no content here
        </h2>
      </div>
    `;
    notFoundContainer.appendChild(notFound);
  }

  data.data.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `
      
       <div class=" bg-base-100">
            <figure>
              <img
                src="${element.thumbnail}"
                class="rounded-lg w-full sm:h-60 md:h-60 lg:h-60 "
              />
            </figure>
            <div class="card mt-4 flex-row">
              <div class="avatar mr-4">
                <div class="w-10 h-10 rounded-full">
                  <img src="${element.authors[0].profile_picture}" />
                </div>
              </div>
              <div class="space-y-2">
                <h2 class="text-base text-[#171717] font-bold">
                  ${element.title}
                </h2>
                <div class="flex flex-row items-center space-x-2">
                  <p class="text-[#171717b3] text-sm">${
                    element.authors[0].profile_name
                  }</p>
                  <span>
                          ${
                            element.authors[0].verified
                              ? `
                                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_11_34)">
                        <path
                          d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z"
                          fill="#2568EF"
                        />
                        <path
                          d="M12.7094 7.20637L9.14062 10.7751L7.29062 8.92668C6.88906 8.52512 6.2375 8.52512 5.83594 8.92668C5.43437 9.32824 5.43437 9.97981 5.83594 10.3814L8.43125 12.9767C8.82187 13.3673 9.45625 13.3673 9.84687 12.9767L14.1625 8.66106C14.5641 8.25949 14.5641 7.60793 14.1625 7.20637C13.7609 6.80481 13.1109 6.80481 12.7094 7.20637Z"
                          fill="#FFFCEE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_11_34">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>                      
      `
                              : ""
                          }
                  </span>
                </div>
                <span class="text-[#171717b3] text-sm">${
                  element.others.views
                } Views</span>
              </div>
            </div>
          </div>
      `;

    cardContainer.appendChild(div);
  });
};

loadData();
loadVideos("1000");
