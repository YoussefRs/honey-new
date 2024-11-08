import React, { useState } from "react";
import "./Tasty.css";
import AccItems from "./AccItems";
import Ddivider from "../globals/divider/Ddivider";
import AccItemsRight from "./AccItemsRight";
import Navbar from "../../pages/globals/Navbar/Navbar"
import Footer from "../globals/footer/Footer";

function Tasty() {
  const accData = [
    {
      title: "1 RECIPES",
      content:
        "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.",
      image:
        "https://www.bhg.com/thmb/ov2S31znAvSCXqrpgJQ8rwBgzp8=/2250x0/filters:no_upscale():strip_icc()/BHG-milk-bread-4CdeIL1uKGyB5ryU8J_EED-aaa76729c86a413ca7500029edba79f0.jpg",
    },
    {
      title: "2 RECIPES",
      content:
        "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.",
      image:
        "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6",
    },
    {
      title: "3 RECIPES",
      content:
        "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.",
      image:
        "https://wildyness.com/uploads/0000/145/2024/04/16/tunisian-sweets-delights-to-eat-in-tunisia.png",
    },
    {
      title: "4 RECIPES",
      content:
        "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.",
      image:
        "https://pistahouse.in/cdn/shop/files/MixedSweets.jpg?v=1710075468&width=640",
    },
  ];

  const accDataRight = [
    {
      title: "1 RECIPES",
      content:
        "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.",
      image:
        "https://www.bhg.com/thmb/ov2S31znAvSCXqrpgJQ8rwBgzp8=/2250x0/filters:no_upscale():strip_icc()/BHG-milk-bread-4CdeIL1uKGyB5ryU8J_EED-aaa76729c86a413ca7500029edba79f0.jpg",
    },
    {
      title: "2 RECIPES",
      content:
        "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.",
      image:
        "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6",
    },
    {
      title: "3 RECIPES",
      content:
        "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.",
      image:
        "https://wildyness.com/uploads/0000/145/2024/04/16/tunisian-sweets-delights-to-eat-in-tunisia.png",
    },
    {
      title: "4 RECIPES",
      content:
        "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos odit quae dolore, nesciunt quaerat sequi possimus iste quas, voluptatibus reiciendis laboriosam deleniti vero ea doloremque explicabo magni! Perferendis, ullam.",
      image:
        "https://pistahouse.in/cdn/shop/files/MixedSweets.jpg?v=1710075468&width=640",
    },
  ];

  const [accordionData, setAccordionData] = useState(accData);
  const [accordionDataRight, setAccordionDataRight] = useState(accDataRight);
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isFirstOpenRight, setIsFirstOpenRight] = useState(false);

  const handleItemClick = (clickedIndex) => {
    if (clickedIndex === 0) {
      // If the first item is clicked, toggle its open state
      setIsFirstOpen(!isFirstOpen);
      return;
    }

    // Create a copy of the data to manipulate
    const newAccordionData = [...accordionData];

    if (isFirstOpen) {
      // If the first item is open, close it first
      setIsFirstOpen(false);

      // Delay the swap and reopening to simulate closing and reopening
      setTimeout(() => {
        // Perform the swap
        const temp = newAccordionData[0];
        newAccordionData[0] = newAccordionData[clickedIndex];
        newAccordionData[clickedIndex] = temp;

        // Update the state with the new order
        setAccordionData(newAccordionData);

        // Reopen the first item after swap
        setIsFirstOpen(true);
      }, 300); // Delay for the closing transition (0.3s in this case)
    } else {
      // If the first item is already closed, just swap and open the new first item
      const temp = newAccordionData[0];
      newAccordionData[0] = newAccordionData[clickedIndex];
      newAccordionData[clickedIndex] = temp;

      // Update the state with the new order
      setAccordionData(newAccordionData);

      // Open the new first item
      setIsFirstOpen(true);
    }
  };

  const handleItemClickRight = (clickedIndexRight) => {
    if (clickedIndexRight === 0) {
      // If the first item is clicked, toggle its open state
      setIsFirstOpenRight(!isFirstOpenRight);
      return;
    }

    // Create a copy of the data to manipulate
    const newAccordionData = [...accordionData];

    if (isFirstOpenRight) {
      // If the first item is open, close it first
      setIsFirstOpenRight(false);

      // Delay the swap and reopening to simulate closing and reopening
      setTimeout(() => {
        // Perform the swap
        const temp = newAccordionData[0];
        newAccordionData[0] = newAccordionData[clickedIndexRight];
        newAccordionData[clickedIndexRight] = temp;

        // Update the state with the new order
        setAccordionDataRight(newAccordionData);

        // Reopen the first item after swap
        setIsFirstOpenRight(true);
      }, 300); // Delay for the closing transition (0.3s in this case)
    } else {
      // If the first item is already closed, just swap and open the new first item
      const temp = newAccordionData[0];
      newAccordionData[0] = newAccordionData[clickedIndexRight];
      newAccordionData[clickedIndexRight] = temp;

      // Update the state with the new order
      setAccordionDataRight(newAccordionData);

      // Open the new first item
      setIsFirstOpenRight(true);
    }
  };

  return (
    <>
    <Navbar />
      <div className="tasty-container">
        <div className="tasty-content">
          <Ddivider />
          <h1>Our Beauty</h1>
          <Ddivider />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            fugiat delectus impedit laborum nulla at natus illum, nesciunt animi
            sit amet suscipit error in fugit molestias? Sint ipsam voluptate
            placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis libero ipsa dignissimos voluptatem odit obcaecati quaerat
            asperiores ex aperiam sapiente reiciendis eaque quisquam quia
            voluptas quam optio, eligendi omnis. Quam.
          </p>
          <button>
            <svg
              width="35"
              height="35"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="30" r="30" fill="white" fill-opacity="0.18" />
              <path
                opacity="0.5"
                d="M36.118 36.7233L30.6256 41.7939L30.6256 12H29.3744L29.3744 41.7939L23.882 36.7233L23 37.5376L30 44L37 37.5376L36.118 36.7233Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="accordion-layout" id="layout-1">
        <div className="image-container">
          <div className="hexagon">
            <img src={accordionData[0].image} alt={accordionData[0].title} />
          </div>
          <div class="hexa-container">
            <div class="center center1"></div>
            <div class="center center2"></div>
            <div class="center center3"></div>
          </div>
        </div>

        <div className="accordion-container">
          <svg
            width="100"
            height="126"
            className="svg-icon"
            viewBox="0 0 115 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_0_1)">
              <path
                d="M114.816 80.368C114.275 80.6846 113.736 81.0037 113.197 81.3226C112.529 81.7176 111.862 82.1125 111.192 82.5024C109.212 83.6637 107.228 84.821 105.24 85.9663M114.816 80.368C114.85 80.3451 114.897 80.3427 114.944 80.3402C114.963 80.3392 114.982 80.3383 115 80.336M114.816 80.368L114.797 80.336L115 80.336M114.816 80.368L114.794 80.336L114.5 80.336L114.5 80.231L114.5 80.126L114.5 80.021L114.5 79.9734M115 80.336L115 26.5836M115 80.336L114.938 79.8398L114.94 79.8396C114.94 79.8396 114.936 79.8399 114.924 79.8406L114.92 79.8408C114.907 79.8414 114.881 79.8428 114.855 79.8452C114.806 79.8498 114.681 79.8632 114.556 79.9408C114.537 79.9517 114.519 79.9626 114.5 79.9734M115 26.5836L114.996 26.5796M115 26.5836L114.994 26.5836L114.996 26.5796M115 26.5836L114.991 26.5924L114.821 27.0481C114.745 27.0196 114.678 26.9983 114.602 26.9738C114.57 26.9637 114.537 26.9529 114.5 26.9409M114.996 26.5796C114.912 26.5481 114.825 26.5202 114.738 26.4923C114.548 26.4313 114.358 26.3701 114.19 26.2712M114.996 26.5796L114.992 26.5836L114.5 26.5836L114.5 26.6886L114.5 26.7935L114.5 26.8985L114.5 26.9409M114.19 26.2712C113.014 25.5828 111.84 24.8895 110.666 24.196C109.252 23.3607 107.838 22.5252 106.418 21.6981M114.19 26.2712L113.936 26.7019C113.937 26.7021 113.937 26.7022 113.937 26.7023M114.19 26.2712L113.938 26.7028C113.938 26.7026 113.937 26.7025 113.937 26.7023M106.418 21.6981C105.213 20.9972 104.001 20.3055 102.789 19.6137C101.743 19.0171 100.698 18.4204 99.6563 17.8177M106.418 21.6981L106.167 22.1301M106.418 21.6981L106.167 22.1303C106.167 22.1302 106.167 22.1302 106.167 22.1301M99.6563 17.8177C98.2904 17.0286 96.9281 16.2351 95.5659 15.4417C94.018 14.5401 92.4704 13.6386 90.9183 12.744C89.4134 11.8751 87.9041 11.0126 86.3945 10.1499C84.9891 9.34673 83.5833 8.54336 82.1802 7.7344C80.9477 7.0236 79.7182 6.30679 78.4886 5.58998C77.2591 4.87318 76.0295 4.15637 74.797 3.44558M99.6563 17.8177L99.4059 18.2505C99.406 18.2505 99.4061 18.2506 99.4062 18.2507M99.6563 17.8177L99.4062 18.2507M74.797 3.44558C72.8089 2.30029 70.8088 1.17503 68.8006 0.0617755M74.797 3.44558L74.5472 3.87871C74.5473 3.87875 74.5474 3.87879 74.5474 3.87883M74.797 3.44558L74.5474 3.87883M68.8006 0.0617755C68.6363 -0.0263235 68.3357 -0.0183145 68.1713 0.0737889C66.7929 0.842204 65.4227 1.6272 64.0517 2.41271C63.7722 2.57281 63.4927 2.73294 63.2131 2.89296C62.8333 3.10938 62.4533 3.32558 62.0732 3.54181C60.8287 4.24984 59.5835 4.95826 58.343 5.67608C57.4632 6.18468 56.5853 6.69727 55.7075 7.20987C54.8297 7.72243 53.9519 8.23498 53.0722 8.74353M68.8006 0.0617755L68.5582 0.499074C68.5628 0.501642 68.5675 0.50421 68.5721 0.506777M68.8006 0.0617755L68.5644 0.502447C68.576 0.508684 68.5796 0.508689 68.5721 0.506777M53.0722 8.74353C52.3053 9.188 51.5339 9.62464 50.7627 10.0611C50.0749 10.4505 49.3872 10.8397 48.7031 11.2343C47.7457 11.7856 46.7906 12.3428 45.8354 12.9001C45.035 13.367 44.2345 13.8341 43.4323 14.2978M53.0722 8.74353L53.3224 9.17641M53.0722 8.74353L53.3229 9.17613C53.3227 9.17622 53.3225 9.17632 53.3224 9.17641M43.4323 14.2978C42.6146 14.7703 41.7939 15.2408 40.9732 15.7113C40.1525 16.1819 39.3318 16.6524 38.5141 17.1249M43.4323 14.2978L43.6824 14.7307C42.8639 15.2037 42.0424 15.6747 41.2219 16.1451C40.401 16.6157 39.5811 17.0858 38.7643 17.5579M43.4323 14.2978L43.6825 14.7307C44.4903 14.2637 45.291 13.7966 46.0905 13.3301C47.0428 12.7745 47.9934 12.2199 48.9526 11.6676L48.953 11.6674C49.6222 11.2814 50.3115 10.8912 51.003 10.4997C51.7817 10.0588 52.5633 9.61634 53.3224 9.17641M38.5141 17.1249C37.8294 17.521 37.1465 17.9206 36.4633 18.3204C35.7027 18.7655 34.9416 19.2109 34.1771 19.6518C33.491 20.0471 32.8027 20.4374 32.1147 20.8276C31.179 21.3582 30.2437 21.8886 29.3151 22.4309C27.9381 23.2334 26.5689 24.0457 25.1994 24.8581C24.6075 25.2092 24.0156 25.5604 23.4229 25.9108C23.3379 25.9603 23.2545 26.0137 23.1712 26.0671C22.9913 26.1824 22.8118 26.2974 22.6173 26.3713M38.5141 17.1249L38.7643 17.5579M38.5141 17.1249L38.7644 17.5578C38.7644 17.5578 38.7643 17.5578 38.7643 17.5579M22.6173 26.3713C22.1162 26.5636 22 26.8999 22 27.4125M22.6173 26.3713L22.7949 26.8387C22.7951 26.8387 22.7953 26.8386 22.7955 26.8385M22.6173 26.3713L22.7964 26.8382C22.7961 26.8383 22.7958 26.8384 22.7955 26.8385M22 27.4125C22.016 44.78 22.016 62.1515 22 79.5191M22 27.4125L22.5 27.412M22 27.4125L22.5 27.4125C22.5 27.4124 22.5 27.4122 22.5 27.412M22 79.5191C22 80.0917 22.2004 80.404 22.6774 80.6804M22 79.5191L22.5 79.5191C22.5 79.5192 22.5 79.5194 22.5 79.5195M22 79.5191L22.5 79.5195M22.6774 80.6804C24.0454 81.4706 25.4075 82.2701 26.7695 83.0695C27.9336 83.7528 29.0976 84.436 30.2651 85.1133C31.584 85.8814 32.9071 86.6399 34.2303 87.3983C35.163 87.933 36.0957 88.4676 37.027 89.0057M22.6774 80.6804L22.928 80.2477M22.6774 80.6804L22.9275 80.2474C22.9277 80.2475 22.9279 80.2476 22.928 80.2477M37.027 89.0057C38.4491 89.8259 39.8689 90.6495 41.2883 91.4729C42.5093 92.1812 43.7299 92.8893 44.9514 93.5949M37.027 89.0057L37.2772 88.5728C37.277 88.5727 37.2769 88.5726 37.2768 88.5726M37.027 89.0057L37.2768 88.5726M44.9514 93.5949C45.8757 94.1271 46.8016 94.657 47.7277 95.187C48.8778 95.8452 50.0283 96.5036 51.1762 97.1669M44.9514 93.5949L45.2015 93.1619M44.9514 93.5949L45.2009 93.1616C45.2011 93.1617 45.2013 93.1618 45.2015 93.1619M51.1762 97.1669C52.2772 97.8004 53.3769 98.44 54.4767 99.0796C55.379 99.6044 56.2814 100.129 57.1846 100.651M51.1762 97.1669L51.4264 96.734M51.1762 97.1669L51.4256 96.7335C51.4259 96.7337 51.4261 96.7338 51.4264 96.734M57.1846 100.651C59.2529 101.844 61.3292 103.029 63.4055 104.211M57.1846 100.651L57.4347 100.218C57.4346 100.218 57.4346 100.218 57.4345 100.218M57.1846 100.651L57.4345 100.218M63.4055 104.211C64.0715 104.589 64.7389 104.963 65.4063 105.338C66.3133 105.846 67.2203 106.355 68.1232 106.874M63.4055 104.211L63.6527 103.776M63.4055 104.211L63.6525 103.776C63.6526 103.776 63.6527 103.776 63.6527 103.776M68.1232 106.874C68.4078 107.034 68.6002 107.05 68.9048 106.874M68.1232 106.874L68.3724 106.44C68.3718 106.44 68.3712 106.44 68.3705 106.439M68.1232 106.874L68.3685 106.438C68.3692 106.438 68.3698 106.439 68.3705 106.439M68.9048 106.874C70.4784 105.964 72.0593 105.066 73.6401 104.168C74.9183 103.442 76.1964 102.717 77.4705 101.984C78.5884 101.342 79.7016 100.691 80.8146 100.04C81.7568 99.4886 82.6988 98.9375 83.6433 98.3923C84.8898 97.6734 86.1404 96.9596 87.391 96.2458C88.6416 95.532 89.8922 94.8182 91.1387 94.0994C92.4439 93.3477 93.7456 92.588 95.0476 91.8283C96.2007 91.1553 97.354 90.4823 98.51 89.8146C99.7035 89.1256 100.899 88.4446 102.095 87.7636C103.144 87.1662 104.193 86.5689 105.24 85.9663M68.9048 106.874L68.6545 106.441C70.2265 105.532 71.8128 104.631 73.397 103.731C74.6761 103.005 75.9537 102.279 77.2214 101.551L77.2215 101.551C78.3424 100.907 79.4491 100.26 80.5576 99.611C81.4983 99.0605 82.4403 98.5094 83.3933 97.9592L83.3935 97.9591C84.6407 97.2399 85.8918 96.5258 87.1418 95.8124L87.1431 95.8116C88.3939 95.0977 89.6435 94.3845 90.889 93.6663L90.8892 93.6662C92.1982 92.9122 93.4946 92.1556 94.7927 91.3981C95.9438 90.7263 97.0962 90.0538 98.2599 89.3817L98.26 89.3816C99.4499 88.6947 100.651 88.0106 101.85 87.3274C102.901 86.729 103.951 86.1312 104.99 85.5329M68.9048 106.874L68.6545 106.441C68.5999 106.473 68.5643 106.487 68.5427 106.494C68.5238 106.5 68.5161 106.5 68.5148 106.5L68.5147 106.5L68.5147 106.5C68.5124 106.5 68.4786 106.5 68.3705 106.439M105.24 85.9663L104.99 85.5329M105.24 85.9663L104.99 85.533C104.99 85.533 104.99 85.533 104.99 85.5329M104.99 85.5329C106.977 84.3885 108.96 83.232 110.939 82.0711L110.941 82.0703C111.612 81.6796 112.274 81.2876 112.939 80.8944C113.456 80.5881 113.975 80.2811 114.5 79.9734M114.5 79.9734L114.5 79.9161L114.5 79.8111L114.5 79.7061L114.5 79.6011L114.5 79.4962L114.5 79.3912L114.5 79.2862L114.5 79.1812L114.5 79.0762L114.5 78.9713L114.5 78.8663L114.5 78.7613L114.5 78.6563L114.5 78.5513L114.5 78.4464L114.5 78.3414L114.5 78.2364L114.5 78.1314L114.5 78.0265L114.5 77.9215L114.5 77.8165L114.5 77.7115L114.5 77.6065L114.5 77.5016L114.5 77.3966L114.5 77.2916L114.5 77.1866L114.5 77.0816L114.5 76.9767L114.5 76.8717L114.5 76.7667L114.5 76.6617L114.5 76.5567L114.5 76.4518L114.5 76.3468L114.5 76.2418L114.5 76.1368L114.5 76.0318L114.5 75.9268L114.5 75.8219L114.5 75.7169L114.5 75.6119L114.5 75.5069L114.5 75.4019L114.5 75.297L114.5 75.192L114.5 75.087L114.5 74.982L114.5 74.877L114.5 74.7721L114.5 74.6671L114.5 74.5621L114.5 74.4571L114.5 74.3521L114.5 74.2471L114.5 74.1422L114.5 74.0372L114.5 73.9322L114.5 73.8272L114.5 73.7222L114.5 73.6173L114.5 73.5123L114.5 73.4073L114.5 73.3023L114.5 73.1973L114.5 73.0923L114.5 72.9874L114.5 72.8824L114.5 72.7774L114.5 72.6724L114.5 72.5674L114.5 72.4624L114.5 72.3575L114.5 72.2525L114.5 72.1475L114.5 72.0425L114.5 71.9375L114.5 71.8325L114.5 71.7276L114.5 71.6226L114.5 71.5176L114.5 71.4126L114.5 71.3076L114.5 71.2026L114.5 71.0977L114.5 70.9927L114.5 70.8877L114.5 70.7827L114.5 70.6777L114.5 70.5727L114.5 70.4678L114.5 70.3628L114.5 70.2578L114.5 70.1528L114.5 70.0478L114.5 69.9428L114.5 69.8378L114.5 69.7329L114.5 69.6279L114.5 69.5229L114.5 69.4179L114.5 69.3129L114.5 69.2079L114.5 69.103L114.5 68.998L114.5 68.893L114.5 68.788L114.5 68.683L114.5 68.578L114.5 68.473L114.5 68.368L114.5 68.2631L114.5 68.1581L114.5 68.0531L114.5 67.9481L114.5 67.8431L114.5 67.7381L114.5 67.6331L114.5 67.5282L114.5 67.4232L114.5 67.3182L114.5 67.2132L114.5 67.1082L114.5 67.0032L114.5 66.8982L114.5 66.7933L114.5 66.6883L114.5 66.5833L114.5 66.4783L114.5 66.3733L114.5 66.2683L114.5 66.1633L114.5 66.0584L114.5 65.9534L114.5 65.8484L114.5 65.7434L114.5 65.6384L114.5 65.5334L114.5 65.4284L114.5 65.3235L114.5 65.2185L114.5 65.1135L114.5 65.0085L114.5 64.9035L114.5 64.7985L114.5 64.6935L114.5 64.5885L114.5 64.4836L114.5 64.3786L114.5 64.2736L114.5 64.1686L114.5 64.0636L114.5 63.9586L114.5 63.8536L114.5 63.7486L114.5 63.6437L114.5 63.5387L114.5 63.4337L114.5 63.3287L114.5 63.2237L114.5 63.1187L114.5 63.0137L114.5 62.9087L114.5 62.8038L114.5 62.6988L114.5 62.5938L114.5 62.4888L114.5 62.3838L114.5 62.2788L114.5 62.1738L114.5 62.0688L114.5 61.9639L114.5 61.8589L114.5 61.7539L114.5 61.6489L114.5 61.5439L114.5 61.4389L114.5 61.3339L114.5 61.2289L114.5 61.124L114.5 61.019L114.5 60.914L114.5 60.809L114.5 60.704L114.5 60.599L114.5 60.494L114.5 60.389L114.5 60.284L114.5 60.1791L114.5 60.0741L114.5 59.9691L114.5 59.8641L114.5 59.7591L114.5 59.6541L114.5 59.5491L114.5 59.4441L114.5 59.3392L114.5 59.2342L114.5 59.1292L114.5 59.0242L114.5 58.9192L114.5 58.8142L114.5 58.7092L114.5 58.6042L114.5 58.4992L114.5 58.3943L114.5 58.2893L114.5 58.1843L114.5 58.0793L114.5 57.9743L114.5 57.8693L114.5 57.7643L114.5 57.6593L114.5 57.5543L114.5 57.4494L114.5 57.3444L114.5 57.2394L114.5 57.1344L114.5 57.0294L114.5 56.9244L114.5 56.8194L114.5 56.7144L114.5 56.6094L114.5 56.5045L114.5 56.3995L114.5 56.2945L114.5 56.1895L114.5 56.0845L114.5 55.9795L114.5 55.8745L114.5 55.7695L114.5 55.6645L114.5 55.5596L114.5 55.4546L114.5 55.3496L114.5 55.2446L114.5 55.1396L114.5 55.0346L114.5 54.9296L114.5 54.8246L114.5 54.7196L114.5 54.6147L114.5 54.5097L114.5 54.4047L114.5 54.2997L114.5 54.1947L114.5 54.0897L114.5 53.9847L114.5 53.8797L114.5 53.7747L114.5 53.6698L114.5 53.5648L114.5 53.4598L114.5 53.3548L114.5 53.2498L114.5 53.1448L114.5 53.0398L114.5 52.9348L114.5 52.8298L114.5 52.7248L114.5 52.6199L114.5 52.5149L114.5 52.4099L114.5 52.3049L114.5 52.1999L114.5 52.0949L114.5 51.9899L114.5 51.8849L114.5 51.7799L114.5 51.675L114.5 51.57L114.5 51.465L114.5 51.36L114.5 51.255L114.5 51.15L114.5 51.045L114.5 50.94L114.5 50.835L114.5 50.7301L114.5 50.6251L114.5 50.5201L114.5 50.4151L114.5 50.3101L114.5 50.2051L114.5 50.1001L114.5 49.9951L114.5 49.8901L114.5 49.7852L114.5 49.6802L114.5 49.5752L114.5 49.4702L114.5 49.3652L114.5 49.2602L114.5 49.1552L114.5 49.0502L114.5 48.9452L114.5 48.8403L114.5 48.7353L114.5 48.6303L114.5 48.5253L114.5 48.4203L114.5 48.3153L114.5 48.2103L114.5 48.1053L114.5 48.0004L114.5 47.8954L114.5 47.7904L114.5 47.6854L114.5 47.5804L114.5 47.4754L114.5 47.3704L114.5 47.2654L114.5 47.1604L114.5 47.0555L114.5 46.9505L114.5 46.8455L114.5 46.7405L114.5 46.6355L114.5 46.5305L114.5 46.4255L114.5 46.3205L114.5 46.2155L114.5 46.1106L114.5 46.0056L114.5 45.9006L114.5 45.7956L114.5 45.6906L114.5 45.5856L114.5 45.4806L114.5 45.3756L114.5 45.2707L114.5 45.1657L114.5 45.0607L114.5 44.9557L114.5 44.8507L114.5 44.7457L114.5 44.6407L114.5 44.5357L114.5 44.4308L114.5 44.3258L114.5 44.2208L114.5 44.1158L114.5 44.0108L114.5 43.9058L114.5 43.8008L114.5 43.6958L114.5 43.5909L114.5 43.4859L114.5 43.3809L114.5 43.2759L114.5 43.1709L114.5 43.0659L114.5 42.9609L114.5 42.8559L114.5 42.751L114.5 42.646L114.5 42.541L114.5 42.436L114.5 42.331L114.5 42.226L114.5 42.121L114.5 42.016L114.5 41.9111L114.5 41.8061L114.5 41.7011L114.5 41.5961L114.5 41.4911L114.5 41.3861L114.5 41.2811L114.5 41.1762L114.5 41.0712L114.5 40.9662L114.5 40.8612L114.5 40.7562L114.5 40.6512L114.5 40.5462L114.5 40.4412L114.5 40.3363L114.5 40.2313L114.5 40.1263L114.5 40.0213L114.5 39.9163L114.5 39.8113L114.5 39.7063L114.5 39.6014L114.5 39.4964L114.5 39.3914L114.5 39.2864L114.5 39.1814L114.5 39.0764L114.5 38.9714L114.5 38.8665L114.5 38.7615L114.5 38.6565L114.5 38.5515L114.5 38.4465L114.5 38.3415L114.5 38.2365L114.5 38.1316L114.5 38.0266L114.5 37.9216L114.5 37.8166L114.5 37.7116L114.5 37.6066L114.5 37.5016L114.5 37.3967L114.5 37.2917L114.5 37.1867L114.5 37.0817L114.5 36.9767L114.5 36.8717L114.5 36.7668L114.5 36.6618L114.5 36.5568L114.5 36.4518L114.5 36.3468L114.5 36.2418L114.5 36.1368L114.5 36.0319L114.5 35.9269L114.5 35.8219L114.5 35.7169L114.5 35.6119L114.5 35.5069L114.5 35.402L114.5 35.297L114.5 35.192L114.5 35.087L114.5 34.982L114.5 34.877L114.5 34.7721L114.5 34.6671L114.5 34.5621L114.5 34.4571L114.5 34.3521L114.5 34.2471L114.5 34.1422L114.5 34.0372L114.5 33.9322L114.5 33.8272L114.5 33.7222L114.5 33.6172L114.5 33.5123L114.5 33.4073L114.5 33.3023L114.5 33.1973L114.5 33.0923L114.5 32.9874L114.5 32.8824L114.5 32.7774L114.5 32.6724L114.5 32.5674L114.5 32.4624L114.5 32.3575L114.5 32.2525L114.5 32.1475L114.5 32.0425L114.5 31.9375L114.5 31.8326L114.5 31.7276L114.5 31.6226L114.5 31.5176L114.5 31.4126L114.5 31.3076L114.5 31.2027L114.5 31.0977L114.5 30.9927L114.5 30.8877L114.5 30.7827L114.5 30.6778L114.5 30.5728L114.5 30.4678L114.5 30.3628L114.5 30.2578L114.5 30.1529L114.5 30.0479L114.5 29.9429L114.5 29.8379L114.5 29.7329L114.5 29.628L114.5 29.523L114.5 29.418L114.5 29.313L114.5 29.208L114.5 29.1031L114.5 28.9981L114.5 28.8931L114.5 28.7881L114.5 28.6831L114.5 28.5782L114.5 28.4732L114.5 28.3682L114.5 28.2632L114.5 28.1582L114.5 28.0533L114.5 27.9483L114.5 27.8433L114.5 27.7383L114.5 27.6334L114.5 27.5284L114.5 27.4234L114.5 27.3184L114.5 27.2134L114.5 27.1085L114.5 27.0035L114.5 26.9409M68.3705 106.439C67.4681 105.92 66.5555 105.409 65.6456 104.899C64.9782 104.524 64.3123 104.151 63.6527 103.776M63.6527 103.776C61.5768 102.595 59.5015 101.41 57.4345 100.218M57.4345 100.218C56.5356 99.6986 55.6337 99.1741 54.731 98.6491C53.6291 98.0083 52.5262 97.3668 51.4264 96.734M51.4264 96.734C50.2792 96.0711 49.1261 95.4112 47.9742 94.752C47.0478 94.2218 46.1223 93.6922 45.2015 93.1619M45.2015 93.1619C43.9824 92.4577 42.7611 91.7493 41.5391 91.0404C40.1187 90.2164 38.6973 89.3918 37.2768 88.5726M37.2768 88.5726C36.342 88.0325 35.4085 87.4974 34.4758 86.9627C33.1546 86.2054 31.8352 85.4491 30.5167 84.6813L30.516 84.6808C29.3561 84.008 28.1919 83.3246 27.0263 82.6405C25.6606 81.8389 24.2929 81.0361 22.928 80.2477M22.928 80.2477C22.7322 80.1343 22.6402 80.0403 22.5894 79.9549C22.5397 79.8715 22.5001 79.7472 22.5 79.5195M22.5 79.5195C22.516 62.1517 22.516 44.7799 22.5 27.412M22.5 27.412C22.5 27.1825 22.5285 27.0698 22.5621 27.0068C22.585 26.9637 22.6316 26.9016 22.7955 26.8385M22.7955 26.8385C22.9828 26.7673 23.1492 26.6712 23.2898 26.5839C23.3525 26.545 23.4057 26.5108 23.4551 26.4791C23.5301 26.4309 23.5965 26.3883 23.6743 26.3431L23.6774 26.3412C24.2713 25.9901 24.8638 25.6386 25.4559 25.2873C26.8248 24.4752 28.1914 23.6645 29.5669 22.8629L29.5673 22.8627C30.4958 22.3204 31.4238 21.7942 32.3556 21.2658C33.0434 20.8758 33.7332 20.4846 34.4268 20.085L34.427 20.0849C35.1861 19.647 35.9538 19.1978 36.7195 18.7498C37.4052 18.3485 38.0893 17.9482 38.7643 17.5579M53.3224 9.17641C54.2027 8.66757 55.0808 8.15482 55.9578 7.64271L55.9597 7.64158L55.9603 7.64125C56.8381 7.12869 57.7147 6.61678 58.5933 6.10897L58.5935 6.10885C59.8321 5.39208 61.0751 4.68495 62.3191 3.97716C62.6996 3.76072 63.0801 3.54423 63.4606 3.32738L63.4614 3.32692C63.7415 3.16664 64.0213 3.00633 64.301 2.84611C65.6707 2.06137 67.0366 1.27883 68.4109 0.512667M68.4109 0.512667C68.4132 0.511872 68.4185 0.5101 68.4274 0.508066C68.4456 0.503899 68.4698 0.50067 68.4967 0.50009C68.5238 0.499509 68.5468 0.501734 68.5631 0.504804C68.567 0.505549 68.57 0.506239 68.5721 0.506777M68.4109 0.512667C68.4122 0.51195 68.4135 0.511235 68.4148 0.510518C68.4115 0.51234 68.4097 0.513091 68.4097 0.513106C68.4097 0.513114 68.4101 0.512962 68.4109 0.512667ZM68.5721 0.506777C70.5738 1.61652 72.5668 2.73786 74.5474 3.87883M74.5474 3.87883C75.7787 4.58891 77.0072 5.30508 78.2368 6.02194L78.2374 6.02228C79.4666 6.73887 80.6969 7.45616 81.9305 8.16753L81.9305 8.16755C83.3434 8.98221 84.7469 9.78426 86.1491 10.5856C87.6537 11.4454 89.1568 12.3043 90.6683 13.177L90.6686 13.1772C92.2236 14.0735 93.7669 14.9724 95.3117 15.8722C96.6725 16.6648 98.0343 17.4581 99.4062 18.2507M99.4062 18.2507C100.457 18.8588 101.502 19.4551 102.546 20.0506C103.753 20.7394 104.958 21.427 106.167 22.1301M106.167 22.1301C107.587 22.9581 108.998 23.7911 110.409 24.6248C111.582 25.3176 112.756 26.0109 113.937 26.7023M113.937 26.7023C114.104 26.8005 114.276 26.8655 114.424 26.9154C114.451 26.9246 114.476 26.9331 114.5 26.9409"
                stroke="url(#paint0_linear_0_1)"
                shape-rendering="crispEdges"
              />
            </g>
            <g clip-path="url(#clip0_0_1)">
              <path
                d="M75.2202 68.7757L75.2202 68.7757C75.1096 68.9165 75.127 69.0652 75.2308 69.1847C75.3365 69.3063 75.4986 69.3554 75.6717 69.2646C79.8603 67.0671 84.0706 64.3994 87.8625 61.5122C94.4689 56.4815 98.7488 51.5821 100.04 47.7389C100.725 45.698 100.576 43.9969 99.6879 42.6201L99.6879 42.62C97.949 39.923 94.6244 38.3517 90.0237 38.1746L75.2202 68.7757ZM75.2202 68.7757C78.4581 64.6543 81.8596 59.4215 84.5539 54.058C87.244 48.7026 89.2496 43.1767 89.6571 38.478L89.6571 38.478M75.2202 68.7757L89.6571 38.478M89.6571 38.478C89.6715 38.3121 89.8223 38.1669 90.0236 38.1746L89.6571 38.478Z"
                fill="#B68556"
                stroke="black"
              />
              <path
                d="M56.3758 47.2093C55.6685 48.3931 55.0151 49.5894 54.4179 50.7903C54.2644 51.099 54.5368 51.446 54.8806 51.3813C57.2615 50.9327 59.8711 50.8606 62.5846 51.4783C64.6855 51.9566 66.2686 52.7525 66.2165 52.728C67.5092 53.3333 68.536 52.6845 68.9805 51.7727C69.4289 50.8523 69.3029 49.6526 68.0105 49.0471C64.4829 47.4033 60.6785 46.7156 56.7121 47.0031C56.5726 47.0133 56.4464 47.091 56.3758 47.2093Z"
                fill="black"
              />
              <path
                d="M62.0261 39.4401C61.7567 39.745 62.0439 40.2092 62.4446 40.1178C66.8459 39.1134 70.9898 39.5739 74.6685 41.2959C75.9617 41.9012 76.9885 41.2523 77.4328 40.3407C77.8812 39.4203 77.7552 38.2206 76.4628 37.615C73.3394 36.1598 69.836 35.3874 66.108 35.5085C66.0072 35.5117 65.9106 35.55 65.8356 35.6161C64.528 36.7719 63.2523 38.0522 62.0261 39.4401Z"
                fill="black"
              />
              <path
                d="M84.5631 30.2509C79.7602 27.4018 73.6005 29.866 68.9049 33.1782C68.5838 33.4047 68.7209 33.8967 69.1147 33.9326C71.8379 34.1805 74.5607 34.8839 77.1939 36.111C81.71 38.2155 78.4897 44.9277 73.9396 42.8009C69.2069 40.5886 64.133 40.8942 59.3563 42.8461C59.2828 42.8762 59.2191 42.9257 59.1727 42.9891C58.7803 43.5242 58.3954 44.0701 58.0187 44.6265C57.8299 44.9053 58.0359 45.2753 58.3771 45.2743C62.1243 45.2633 65.7538 46.1108 68.7542 47.5491C70.8513 48.5545 71.3935 50.6851 70.5135 52.4909C69.6405 54.2823 67.6012 55.2218 65.4859 54.2322C61.8764 52.5436 57.7798 52.1924 53.3609 53.4537C53.2366 53.4892 53.1349 53.5794 53.0857 53.6967C52.4762 55.1498 51.9517 56.6 51.5185 58.0333C51.4352 58.3088 51.6525 58.5826 51.9453 58.5687C55.8587 58.3826 59.7134 59.0895 63.3596 60.7961C65.5857 61.8381 65.9307 64.0668 65.1209 65.7286C64.2485 67.5188 62.2153 68.4703 60.1073 67.4869C57.2365 66.1474 53.9326 65.6022 50.4114 66.0895C50.2064 66.118 50.0489 66.2843 50.0426 66.4871C49.8662 72.0839 51.5927 76.2318 54.9562 78.227C58.7069 80.4505 63.4817 77.4507 66.7735 74.6147C78.8087 64.2488 94.0601 35.8836 84.5631 30.2509Z"
                fill="black"
              />
              <path
                d="M50.8339 60.6093C50.5786 61.7267 50.3823 62.828 50.2474 63.9061C50.2138 64.1747 50.444 64.4023 50.7182 64.3717C52.6883 64.1516 54.8881 64.1932 57.2047 64.7318C59.2917 65.217 60.8597 65.9932 60.8315 65.98C62.0153 66.534 63.0866 66.0381 63.5873 65.0104C64.0338 64.0942 63.9101 62.9007 62.6271 62.2997C59.1904 60.6901 55.3455 59.9484 51.2122 60.2853C51.0281 60.3003 50.8744 60.4324 50.8339 60.6093Z"
                fill="black"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_0_1"
                x="0"
                y="0"
                width="115"
                height="126"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-15" dy="12" />
                <feGaussianBlur stdDeviation="3.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_1"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_1"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_0_1"
                x1="115"
                y1="53.5"
                x2="22"
                y2="53.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BC8959" />
                <stop offset="1" stop-color="#DAAF7E" />
              </linearGradient>
              <clipPath id="clip0_0_1">
                <rect
                  width="51"
                  height="50"
                  fill="white"
                  transform="translate(50 29)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="accordion-h" id="accordion-h-1">For biscuit</span>

          {accordionData.map((item, index) => (
            <AccItems
              key={index}
              title={item.title}
              content={item.content}
              expanded={index === 0}
              totalItems={accordionData.length}
              isOpen={index === 0 ? isFirstOpen : false}
              index={index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>


      <div className="accordion-layout" id="layout-2">
        <div className="accordion-container-right">
          <svg
            width="100"
            height="126"
            className="svg-icon-right"
            viewBox="0 0 115 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_0_1)">
              <path
                d="M114.816 80.368C114.275 80.6846 113.736 81.0037 113.197 81.3226C112.529 81.7176 111.862 82.1125 111.192 82.5024C109.212 83.6637 107.228 84.821 105.24 85.9663M114.816 80.368C114.85 80.3451 114.897 80.3427 114.944 80.3402C114.963 80.3392 114.982 80.3383 115 80.336M114.816 80.368L114.797 80.336L115 80.336M114.816 80.368L114.794 80.336L114.5 80.336L114.5 80.231L114.5 80.126L114.5 80.021L114.5 79.9734M115 80.336L115 26.5836M115 80.336L114.938 79.8398L114.94 79.8396C114.94 79.8396 114.936 79.8399 114.924 79.8406L114.92 79.8408C114.907 79.8414 114.881 79.8428 114.855 79.8452C114.806 79.8498 114.681 79.8632 114.556 79.9408C114.537 79.9517 114.519 79.9626 114.5 79.9734M115 26.5836L114.996 26.5796M115 26.5836L114.994 26.5836L114.996 26.5796M115 26.5836L114.991 26.5924L114.821 27.0481C114.745 27.0196 114.678 26.9983 114.602 26.9738C114.57 26.9637 114.537 26.9529 114.5 26.9409M114.996 26.5796C114.912 26.5481 114.825 26.5202 114.738 26.4923C114.548 26.4313 114.358 26.3701 114.19 26.2712M114.996 26.5796L114.992 26.5836L114.5 26.5836L114.5 26.6886L114.5 26.7935L114.5 26.8985L114.5 26.9409M114.19 26.2712C113.014 25.5828 111.84 24.8895 110.666 24.196C109.252 23.3607 107.838 22.5252 106.418 21.6981M114.19 26.2712L113.936 26.7019C113.937 26.7021 113.937 26.7022 113.937 26.7023M114.19 26.2712L113.938 26.7028C113.938 26.7026 113.937 26.7025 113.937 26.7023M106.418 21.6981C105.213 20.9972 104.001 20.3055 102.789 19.6137C101.743 19.0171 100.698 18.4204 99.6563 17.8177M106.418 21.6981L106.167 22.1301M106.418 21.6981L106.167 22.1303C106.167 22.1302 106.167 22.1302 106.167 22.1301M99.6563 17.8177C98.2904 17.0286 96.9281 16.2351 95.5659 15.4417C94.018 14.5401 92.4704 13.6386 90.9183 12.744C89.4134 11.8751 87.9041 11.0126 86.3945 10.1499C84.9891 9.34673 83.5833 8.54336 82.1802 7.7344C80.9477 7.0236 79.7182 6.30679 78.4886 5.58998C77.2591 4.87318 76.0295 4.15637 74.797 3.44558M99.6563 17.8177L99.4059 18.2505C99.406 18.2505 99.4061 18.2506 99.4062 18.2507M99.6563 17.8177L99.4062 18.2507M74.797 3.44558C72.8089 2.30029 70.8088 1.17503 68.8006 0.0617755M74.797 3.44558L74.5472 3.87871C74.5473 3.87875 74.5474 3.87879 74.5474 3.87883M74.797 3.44558L74.5474 3.87883M68.8006 0.0617755C68.6363 -0.0263235 68.3357 -0.0183145 68.1713 0.0737889C66.7929 0.842204 65.4227 1.6272 64.0517 2.41271C63.7722 2.57281 63.4927 2.73294 63.2131 2.89296C62.8333 3.10938 62.4533 3.32558 62.0732 3.54181C60.8287 4.24984 59.5835 4.95826 58.343 5.67608C57.4632 6.18468 56.5853 6.69727 55.7075 7.20987C54.8297 7.72243 53.9519 8.23498 53.0722 8.74353M68.8006 0.0617755L68.5582 0.499074C68.5628 0.501642 68.5675 0.50421 68.5721 0.506777M68.8006 0.0617755L68.5644 0.502447C68.576 0.508684 68.5796 0.508689 68.5721 0.506777M53.0722 8.74353C52.3053 9.188 51.5339 9.62464 50.7627 10.0611C50.0749 10.4505 49.3872 10.8397 48.7031 11.2343C47.7457 11.7856 46.7906 12.3428 45.8354 12.9001C45.035 13.367 44.2345 13.8341 43.4323 14.2978M53.0722 8.74353L53.3224 9.17641M53.0722 8.74353L53.3229 9.17613C53.3227 9.17622 53.3225 9.17632 53.3224 9.17641M43.4323 14.2978C42.6146 14.7703 41.7939 15.2408 40.9732 15.7113C40.1525 16.1819 39.3318 16.6524 38.5141 17.1249M43.4323 14.2978L43.6824 14.7307C42.8639 15.2037 42.0424 15.6747 41.2219 16.1451C40.401 16.6157 39.5811 17.0858 38.7643 17.5579M43.4323 14.2978L43.6825 14.7307C44.4903 14.2637 45.291 13.7966 46.0905 13.3301C47.0428 12.7745 47.9934 12.2199 48.9526 11.6676L48.953 11.6674C49.6222 11.2814 50.3115 10.8912 51.003 10.4997C51.7817 10.0588 52.5633 9.61634 53.3224 9.17641M38.5141 17.1249C37.8294 17.521 37.1465 17.9206 36.4633 18.3204C35.7027 18.7655 34.9416 19.2109 34.1771 19.6518C33.491 20.0471 32.8027 20.4374 32.1147 20.8276C31.179 21.3582 30.2437 21.8886 29.3151 22.4309C27.9381 23.2334 26.5689 24.0457 25.1994 24.8581C24.6075 25.2092 24.0156 25.5604 23.4229 25.9108C23.3379 25.9603 23.2545 26.0137 23.1712 26.0671C22.9913 26.1824 22.8118 26.2974 22.6173 26.3713M38.5141 17.1249L38.7643 17.5579M38.5141 17.1249L38.7644 17.5578C38.7644 17.5578 38.7643 17.5578 38.7643 17.5579M22.6173 26.3713C22.1162 26.5636 22 26.8999 22 27.4125M22.6173 26.3713L22.7949 26.8387C22.7951 26.8387 22.7953 26.8386 22.7955 26.8385M22.6173 26.3713L22.7964 26.8382C22.7961 26.8383 22.7958 26.8384 22.7955 26.8385M22 27.4125C22.016 44.78 22.016 62.1515 22 79.5191M22 27.4125L22.5 27.412M22 27.4125L22.5 27.4125C22.5 27.4124 22.5 27.4122 22.5 27.412M22 79.5191C22 80.0917 22.2004 80.404 22.6774 80.6804M22 79.5191L22.5 79.5191C22.5 79.5192 22.5 79.5194 22.5 79.5195M22 79.5191L22.5 79.5195M22.6774 80.6804C24.0454 81.4706 25.4075 82.2701 26.7695 83.0695C27.9336 83.7528 29.0976 84.436 30.2651 85.1133C31.584 85.8814 32.9071 86.6399 34.2303 87.3983C35.163 87.933 36.0957 88.4676 37.027 89.0057M22.6774 80.6804L22.928 80.2477M22.6774 80.6804L22.9275 80.2474C22.9277 80.2475 22.9279 80.2476 22.928 80.2477M37.027 89.0057C38.4491 89.8259 39.8689 90.6495 41.2883 91.4729C42.5093 92.1812 43.7299 92.8893 44.9514 93.5949M37.027 89.0057L37.2772 88.5728C37.277 88.5727 37.2769 88.5726 37.2768 88.5726M37.027 89.0057L37.2768 88.5726M44.9514 93.5949C45.8757 94.1271 46.8016 94.657 47.7277 95.187C48.8778 95.8452 50.0283 96.5036 51.1762 97.1669M44.9514 93.5949L45.2015 93.1619M44.9514 93.5949L45.2009 93.1616C45.2011 93.1617 45.2013 93.1618 45.2015 93.1619M51.1762 97.1669C52.2772 97.8004 53.3769 98.44 54.4767 99.0796C55.379 99.6044 56.2814 100.129 57.1846 100.651M51.1762 97.1669L51.4264 96.734M51.1762 97.1669L51.4256 96.7335C51.4259 96.7337 51.4261 96.7338 51.4264 96.734M57.1846 100.651C59.2529 101.844 61.3292 103.029 63.4055 104.211M57.1846 100.651L57.4347 100.218C57.4346 100.218 57.4346 100.218 57.4345 100.218M57.1846 100.651L57.4345 100.218M63.4055 104.211C64.0715 104.589 64.7389 104.963 65.4063 105.338C66.3133 105.846 67.2203 106.355 68.1232 106.874M63.4055 104.211L63.6527 103.776M63.4055 104.211L63.6525 103.776C63.6526 103.776 63.6527 103.776 63.6527 103.776M68.1232 106.874C68.4078 107.034 68.6002 107.05 68.9048 106.874M68.1232 106.874L68.3724 106.44C68.3718 106.44 68.3712 106.44 68.3705 106.439M68.1232 106.874L68.3685 106.438C68.3692 106.438 68.3698 106.439 68.3705 106.439M68.9048 106.874C70.4784 105.964 72.0593 105.066 73.6401 104.168C74.9183 103.442 76.1964 102.717 77.4705 101.984C78.5884 101.342 79.7016 100.691 80.8146 100.04C81.7568 99.4886 82.6988 98.9375 83.6433 98.3923C84.8898 97.6734 86.1404 96.9596 87.391 96.2458C88.6416 95.532 89.8922 94.8182 91.1387 94.0994C92.4439 93.3477 93.7456 92.588 95.0476 91.8283C96.2007 91.1553 97.354 90.4823 98.51 89.8146C99.7035 89.1256 100.899 88.4446 102.095 87.7636C103.144 87.1662 104.193 86.5689 105.24 85.9663M68.9048 106.874L68.6545 106.441C70.2265 105.532 71.8128 104.631 73.397 103.731C74.6761 103.005 75.9537 102.279 77.2214 101.551L77.2215 101.551C78.3424 100.907 79.4491 100.26 80.5576 99.611C81.4983 99.0605 82.4403 98.5094 83.3933 97.9592L83.3935 97.9591C84.6407 97.2399 85.8918 96.5258 87.1418 95.8124L87.1431 95.8116C88.3939 95.0977 89.6435 94.3845 90.889 93.6663L90.8892 93.6662C92.1982 92.9122 93.4946 92.1556 94.7927 91.3981C95.9438 90.7263 97.0962 90.0538 98.2599 89.3817L98.26 89.3816C99.4499 88.6947 100.651 88.0106 101.85 87.3274C102.901 86.729 103.951 86.1312 104.99 85.5329M68.9048 106.874L68.6545 106.441C68.5999 106.473 68.5643 106.487 68.5427 106.494C68.5238 106.5 68.5161 106.5 68.5148 106.5L68.5147 106.5L68.5147 106.5C68.5124 106.5 68.4786 106.5 68.3705 106.439M105.24 85.9663L104.99 85.5329M105.24 85.9663L104.99 85.533C104.99 85.533 104.99 85.533 104.99 85.5329M104.99 85.5329C106.977 84.3885 108.96 83.232 110.939 82.0711L110.941 82.0703C111.612 81.6796 112.274 81.2876 112.939 80.8944C113.456 80.5881 113.975 80.2811 114.5 79.9734M114.5 79.9734L114.5 79.9161L114.5 79.8111L114.5 79.7061L114.5 79.6011L114.5 79.4962L114.5 79.3912L114.5 79.2862L114.5 79.1812L114.5 79.0762L114.5 78.9713L114.5 78.8663L114.5 78.7613L114.5 78.6563L114.5 78.5513L114.5 78.4464L114.5 78.3414L114.5 78.2364L114.5 78.1314L114.5 78.0265L114.5 77.9215L114.5 77.8165L114.5 77.7115L114.5 77.6065L114.5 77.5016L114.5 77.3966L114.5 77.2916L114.5 77.1866L114.5 77.0816L114.5 76.9767L114.5 76.8717L114.5 76.7667L114.5 76.6617L114.5 76.5567L114.5 76.4518L114.5 76.3468L114.5 76.2418L114.5 76.1368L114.5 76.0318L114.5 75.9268L114.5 75.8219L114.5 75.7169L114.5 75.6119L114.5 75.5069L114.5 75.4019L114.5 75.297L114.5 75.192L114.5 75.087L114.5 74.982L114.5 74.877L114.5 74.7721L114.5 74.6671L114.5 74.5621L114.5 74.4571L114.5 74.3521L114.5 74.2471L114.5 74.1422L114.5 74.0372L114.5 73.9322L114.5 73.8272L114.5 73.7222L114.5 73.6173L114.5 73.5123L114.5 73.4073L114.5 73.3023L114.5 73.1973L114.5 73.0923L114.5 72.9874L114.5 72.8824L114.5 72.7774L114.5 72.6724L114.5 72.5674L114.5 72.4624L114.5 72.3575L114.5 72.2525L114.5 72.1475L114.5 72.0425L114.5 71.9375L114.5 71.8325L114.5 71.7276L114.5 71.6226L114.5 71.5176L114.5 71.4126L114.5 71.3076L114.5 71.2026L114.5 71.0977L114.5 70.9927L114.5 70.8877L114.5 70.7827L114.5 70.6777L114.5 70.5727L114.5 70.4678L114.5 70.3628L114.5 70.2578L114.5 70.1528L114.5 70.0478L114.5 69.9428L114.5 69.8378L114.5 69.7329L114.5 69.6279L114.5 69.5229L114.5 69.4179L114.5 69.3129L114.5 69.2079L114.5 69.103L114.5 68.998L114.5 68.893L114.5 68.788L114.5 68.683L114.5 68.578L114.5 68.473L114.5 68.368L114.5 68.2631L114.5 68.1581L114.5 68.0531L114.5 67.9481L114.5 67.8431L114.5 67.7381L114.5 67.6331L114.5 67.5282L114.5 67.4232L114.5 67.3182L114.5 67.2132L114.5 67.1082L114.5 67.0032L114.5 66.8982L114.5 66.7933L114.5 66.6883L114.5 66.5833L114.5 66.4783L114.5 66.3733L114.5 66.2683L114.5 66.1633L114.5 66.0584L114.5 65.9534L114.5 65.8484L114.5 65.7434L114.5 65.6384L114.5 65.5334L114.5 65.4284L114.5 65.3235L114.5 65.2185L114.5 65.1135L114.5 65.0085L114.5 64.9035L114.5 64.7985L114.5 64.6935L114.5 64.5885L114.5 64.4836L114.5 64.3786L114.5 64.2736L114.5 64.1686L114.5 64.0636L114.5 63.9586L114.5 63.8536L114.5 63.7486L114.5 63.6437L114.5 63.5387L114.5 63.4337L114.5 63.3287L114.5 63.2237L114.5 63.1187L114.5 63.0137L114.5 62.9087L114.5 62.8038L114.5 62.6988L114.5 62.5938L114.5 62.4888L114.5 62.3838L114.5 62.2788L114.5 62.1738L114.5 62.0688L114.5 61.9639L114.5 61.8589L114.5 61.7539L114.5 61.6489L114.5 61.5439L114.5 61.4389L114.5 61.3339L114.5 61.2289L114.5 61.124L114.5 61.019L114.5 60.914L114.5 60.809L114.5 60.704L114.5 60.599L114.5 60.494L114.5 60.389L114.5 60.284L114.5 60.1791L114.5 60.0741L114.5 59.9691L114.5 59.8641L114.5 59.7591L114.5 59.6541L114.5 59.5491L114.5 59.4441L114.5 59.3392L114.5 59.2342L114.5 59.1292L114.5 59.0242L114.5 58.9192L114.5 58.8142L114.5 58.7092L114.5 58.6042L114.5 58.4992L114.5 58.3943L114.5 58.2893L114.5 58.1843L114.5 58.0793L114.5 57.9743L114.5 57.8693L114.5 57.7643L114.5 57.6593L114.5 57.5543L114.5 57.4494L114.5 57.3444L114.5 57.2394L114.5 57.1344L114.5 57.0294L114.5 56.9244L114.5 56.8194L114.5 56.7144L114.5 56.6094L114.5 56.5045L114.5 56.3995L114.5 56.2945L114.5 56.1895L114.5 56.0845L114.5 55.9795L114.5 55.8745L114.5 55.7695L114.5 55.6645L114.5 55.5596L114.5 55.4546L114.5 55.3496L114.5 55.2446L114.5 55.1396L114.5 55.0346L114.5 54.9296L114.5 54.8246L114.5 54.7196L114.5 54.6147L114.5 54.5097L114.5 54.4047L114.5 54.2997L114.5 54.1947L114.5 54.0897L114.5 53.9847L114.5 53.8797L114.5 53.7747L114.5 53.6698L114.5 53.5648L114.5 53.4598L114.5 53.3548L114.5 53.2498L114.5 53.1448L114.5 53.0398L114.5 52.9348L114.5 52.8298L114.5 52.7248L114.5 52.6199L114.5 52.5149L114.5 52.4099L114.5 52.3049L114.5 52.1999L114.5 52.0949L114.5 51.9899L114.5 51.8849L114.5 51.7799L114.5 51.675L114.5 51.57L114.5 51.465L114.5 51.36L114.5 51.255L114.5 51.15L114.5 51.045L114.5 50.94L114.5 50.835L114.5 50.7301L114.5 50.6251L114.5 50.5201L114.5 50.4151L114.5 50.3101L114.5 50.2051L114.5 50.1001L114.5 49.9951L114.5 49.8901L114.5 49.7852L114.5 49.6802L114.5 49.5752L114.5 49.4702L114.5 49.3652L114.5 49.2602L114.5 49.1552L114.5 49.0502L114.5 48.9452L114.5 48.8403L114.5 48.7353L114.5 48.6303L114.5 48.5253L114.5 48.4203L114.5 48.3153L114.5 48.2103L114.5 48.1053L114.5 48.0004L114.5 47.8954L114.5 47.7904L114.5 47.6854L114.5 47.5804L114.5 47.4754L114.5 47.3704L114.5 47.2654L114.5 47.1604L114.5 47.0555L114.5 46.9505L114.5 46.8455L114.5 46.7405L114.5 46.6355L114.5 46.5305L114.5 46.4255L114.5 46.3205L114.5 46.2155L114.5 46.1106L114.5 46.0056L114.5 45.9006L114.5 45.7956L114.5 45.6906L114.5 45.5856L114.5 45.4806L114.5 45.3756L114.5 45.2707L114.5 45.1657L114.5 45.0607L114.5 44.9557L114.5 44.8507L114.5 44.7457L114.5 44.6407L114.5 44.5357L114.5 44.4308L114.5 44.3258L114.5 44.2208L114.5 44.1158L114.5 44.0108L114.5 43.9058L114.5 43.8008L114.5 43.6958L114.5 43.5909L114.5 43.4859L114.5 43.3809L114.5 43.2759L114.5 43.1709L114.5 43.0659L114.5 42.9609L114.5 42.8559L114.5 42.751L114.5 42.646L114.5 42.541L114.5 42.436L114.5 42.331L114.5 42.226L114.5 42.121L114.5 42.016L114.5 41.9111L114.5 41.8061L114.5 41.7011L114.5 41.5961L114.5 41.4911L114.5 41.3861L114.5 41.2811L114.5 41.1762L114.5 41.0712L114.5 40.9662L114.5 40.8612L114.5 40.7562L114.5 40.6512L114.5 40.5462L114.5 40.4412L114.5 40.3363L114.5 40.2313L114.5 40.1263L114.5 40.0213L114.5 39.9163L114.5 39.8113L114.5 39.7063L114.5 39.6014L114.5 39.4964L114.5 39.3914L114.5 39.2864L114.5 39.1814L114.5 39.0764L114.5 38.9714L114.5 38.8665L114.5 38.7615L114.5 38.6565L114.5 38.5515L114.5 38.4465L114.5 38.3415L114.5 38.2365L114.5 38.1316L114.5 38.0266L114.5 37.9216L114.5 37.8166L114.5 37.7116L114.5 37.6066L114.5 37.5016L114.5 37.3967L114.5 37.2917L114.5 37.1867L114.5 37.0817L114.5 36.9767L114.5 36.8717L114.5 36.7668L114.5 36.6618L114.5 36.5568L114.5 36.4518L114.5 36.3468L114.5 36.2418L114.5 36.1368L114.5 36.0319L114.5 35.9269L114.5 35.8219L114.5 35.7169L114.5 35.6119L114.5 35.5069L114.5 35.402L114.5 35.297L114.5 35.192L114.5 35.087L114.5 34.982L114.5 34.877L114.5 34.7721L114.5 34.6671L114.5 34.5621L114.5 34.4571L114.5 34.3521L114.5 34.2471L114.5 34.1422L114.5 34.0372L114.5 33.9322L114.5 33.8272L114.5 33.7222L114.5 33.6172L114.5 33.5123L114.5 33.4073L114.5 33.3023L114.5 33.1973L114.5 33.0923L114.5 32.9874L114.5 32.8824L114.5 32.7774L114.5 32.6724L114.5 32.5674L114.5 32.4624L114.5 32.3575L114.5 32.2525L114.5 32.1475L114.5 32.0425L114.5 31.9375L114.5 31.8326L114.5 31.7276L114.5 31.6226L114.5 31.5176L114.5 31.4126L114.5 31.3076L114.5 31.2027L114.5 31.0977L114.5 30.9927L114.5 30.8877L114.5 30.7827L114.5 30.6778L114.5 30.5728L114.5 30.4678L114.5 30.3628L114.5 30.2578L114.5 30.1529L114.5 30.0479L114.5 29.9429L114.5 29.8379L114.5 29.7329L114.5 29.628L114.5 29.523L114.5 29.418L114.5 29.313L114.5 29.208L114.5 29.1031L114.5 28.9981L114.5 28.8931L114.5 28.7881L114.5 28.6831L114.5 28.5782L114.5 28.4732L114.5 28.3682L114.5 28.2632L114.5 28.1582L114.5 28.0533L114.5 27.9483L114.5 27.8433L114.5 27.7383L114.5 27.6334L114.5 27.5284L114.5 27.4234L114.5 27.3184L114.5 27.2134L114.5 27.1085L114.5 27.0035L114.5 26.9409M68.3705 106.439C67.4681 105.92 66.5555 105.409 65.6456 104.899C64.9782 104.524 64.3123 104.151 63.6527 103.776M63.6527 103.776C61.5768 102.595 59.5015 101.41 57.4345 100.218M57.4345 100.218C56.5356 99.6986 55.6337 99.1741 54.731 98.6491C53.6291 98.0083 52.5262 97.3668 51.4264 96.734M51.4264 96.734C50.2792 96.0711 49.1261 95.4112 47.9742 94.752C47.0478 94.2218 46.1223 93.6922 45.2015 93.1619M45.2015 93.1619C43.9824 92.4577 42.7611 91.7493 41.5391 91.0404C40.1187 90.2164 38.6973 89.3918 37.2768 88.5726M37.2768 88.5726C36.342 88.0325 35.4085 87.4974 34.4758 86.9627C33.1546 86.2054 31.8352 85.4491 30.5167 84.6813L30.516 84.6808C29.3561 84.008 28.1919 83.3246 27.0263 82.6405C25.6606 81.8389 24.2929 81.0361 22.928 80.2477M22.928 80.2477C22.7322 80.1343 22.6402 80.0403 22.5894 79.9549C22.5397 79.8715 22.5001 79.7472 22.5 79.5195M22.5 79.5195C22.516 62.1517 22.516 44.7799 22.5 27.412M22.5 27.412C22.5 27.1825 22.5285 27.0698 22.5621 27.0068C22.585 26.9637 22.6316 26.9016 22.7955 26.8385M22.7955 26.8385C22.9828 26.7673 23.1492 26.6712 23.2898 26.5839C23.3525 26.545 23.4057 26.5108 23.4551 26.4791C23.5301 26.4309 23.5965 26.3883 23.6743 26.3431L23.6774 26.3412C24.2713 25.9901 24.8638 25.6386 25.4559 25.2873C26.8248 24.4752 28.1914 23.6645 29.5669 22.8629L29.5673 22.8627C30.4958 22.3204 31.4238 21.7942 32.3556 21.2658C33.0434 20.8758 33.7332 20.4846 34.4268 20.085L34.427 20.0849C35.1861 19.647 35.9538 19.1978 36.7195 18.7498C37.4052 18.3485 38.0893 17.9482 38.7643 17.5579M53.3224 9.17641C54.2027 8.66757 55.0808 8.15482 55.9578 7.64271L55.9597 7.64158L55.9603 7.64125C56.8381 7.12869 57.7147 6.61678 58.5933 6.10897L58.5935 6.10885C59.8321 5.39208 61.0751 4.68495 62.3191 3.97716C62.6996 3.76072 63.0801 3.54423 63.4606 3.32738L63.4614 3.32692C63.7415 3.16664 64.0213 3.00633 64.301 2.84611C65.6707 2.06137 67.0366 1.27883 68.4109 0.512667M68.4109 0.512667C68.4132 0.511872 68.4185 0.5101 68.4274 0.508066C68.4456 0.503899 68.4698 0.50067 68.4967 0.50009C68.5238 0.499509 68.5468 0.501734 68.5631 0.504804C68.567 0.505549 68.57 0.506239 68.5721 0.506777M68.4109 0.512667C68.4122 0.51195 68.4135 0.511235 68.4148 0.510518C68.4115 0.51234 68.4097 0.513091 68.4097 0.513106C68.4097 0.513114 68.4101 0.512962 68.4109 0.512667ZM68.5721 0.506777C70.5738 1.61652 72.5668 2.73786 74.5474 3.87883M74.5474 3.87883C75.7787 4.58891 77.0072 5.30508 78.2368 6.02194L78.2374 6.02228C79.4666 6.73887 80.6969 7.45616 81.9305 8.16753L81.9305 8.16755C83.3434 8.98221 84.7469 9.78426 86.1491 10.5856C87.6537 11.4454 89.1568 12.3043 90.6683 13.177L90.6686 13.1772C92.2236 14.0735 93.7669 14.9724 95.3117 15.8722C96.6725 16.6648 98.0343 17.4581 99.4062 18.2507M99.4062 18.2507C100.457 18.8588 101.502 19.4551 102.546 20.0506C103.753 20.7394 104.958 21.427 106.167 22.1301M106.167 22.1301C107.587 22.9581 108.998 23.7911 110.409 24.6248C111.582 25.3176 112.756 26.0109 113.937 26.7023M113.937 26.7023C114.104 26.8005 114.276 26.8655 114.424 26.9154C114.451 26.9246 114.476 26.9331 114.5 26.9409"
                stroke="url(#paint0_linear_0_1)"
                shape-rendering="crispEdges"
              />
            </g>
            <g clip-path="url(#clip0_0_1)">
              <path
                d="M75.2202 68.7757L75.2202 68.7757C75.1096 68.9165 75.127 69.0652 75.2308 69.1847C75.3365 69.3063 75.4986 69.3554 75.6717 69.2646C79.8603 67.0671 84.0706 64.3994 87.8625 61.5122C94.4689 56.4815 98.7488 51.5821 100.04 47.7389C100.725 45.698 100.576 43.9969 99.6879 42.6201L99.6879 42.62C97.949 39.923 94.6244 38.3517 90.0237 38.1746L75.2202 68.7757ZM75.2202 68.7757C78.4581 64.6543 81.8596 59.4215 84.5539 54.058C87.244 48.7026 89.2496 43.1767 89.6571 38.478L89.6571 38.478M75.2202 68.7757L89.6571 38.478M89.6571 38.478C89.6715 38.3121 89.8223 38.1669 90.0236 38.1746L89.6571 38.478Z"
                fill="#B68556"
                stroke="black"
              />
              <path
                d="M56.3758 47.2093C55.6685 48.3931 55.0151 49.5894 54.4179 50.7903C54.2644 51.099 54.5368 51.446 54.8806 51.3813C57.2615 50.9327 59.8711 50.8606 62.5846 51.4783C64.6855 51.9566 66.2686 52.7525 66.2165 52.728C67.5092 53.3333 68.536 52.6845 68.9805 51.7727C69.4289 50.8523 69.3029 49.6526 68.0105 49.0471C64.4829 47.4033 60.6785 46.7156 56.7121 47.0031C56.5726 47.0133 56.4464 47.091 56.3758 47.2093Z"
                fill="black"
              />
              <path
                d="M62.0261 39.4401C61.7567 39.745 62.0439 40.2092 62.4446 40.1178C66.8459 39.1134 70.9898 39.5739 74.6685 41.2959C75.9617 41.9012 76.9885 41.2523 77.4328 40.3407C77.8812 39.4203 77.7552 38.2206 76.4628 37.615C73.3394 36.1598 69.836 35.3874 66.108 35.5085C66.0072 35.5117 65.9106 35.55 65.8356 35.6161C64.528 36.7719 63.2523 38.0522 62.0261 39.4401Z"
                fill="black"
              />
              <path
                d="M84.5631 30.2509C79.7602 27.4018 73.6005 29.866 68.9049 33.1782C68.5838 33.4047 68.7209 33.8967 69.1147 33.9326C71.8379 34.1805 74.5607 34.8839 77.1939 36.111C81.71 38.2155 78.4897 44.9277 73.9396 42.8009C69.2069 40.5886 64.133 40.8942 59.3563 42.8461C59.2828 42.8762 59.2191 42.9257 59.1727 42.9891C58.7803 43.5242 58.3954 44.0701 58.0187 44.6265C57.8299 44.9053 58.0359 45.2753 58.3771 45.2743C62.1243 45.2633 65.7538 46.1108 68.7542 47.5491C70.8513 48.5545 71.3935 50.6851 70.5135 52.4909C69.6405 54.2823 67.6012 55.2218 65.4859 54.2322C61.8764 52.5436 57.7798 52.1924 53.3609 53.4537C53.2366 53.4892 53.1349 53.5794 53.0857 53.6967C52.4762 55.1498 51.9517 56.6 51.5185 58.0333C51.4352 58.3088 51.6525 58.5826 51.9453 58.5687C55.8587 58.3826 59.7134 59.0895 63.3596 60.7961C65.5857 61.8381 65.9307 64.0668 65.1209 65.7286C64.2485 67.5188 62.2153 68.4703 60.1073 67.4869C57.2365 66.1474 53.9326 65.6022 50.4114 66.0895C50.2064 66.118 50.0489 66.2843 50.0426 66.4871C49.8662 72.0839 51.5927 76.2318 54.9562 78.227C58.7069 80.4505 63.4817 77.4507 66.7735 74.6147C78.8087 64.2488 94.0601 35.8836 84.5631 30.2509Z"
                fill="black"
              />
              <path
                d="M50.8339 60.6093C50.5786 61.7267 50.3823 62.828 50.2474 63.9061C50.2138 64.1747 50.444 64.4023 50.7182 64.3717C52.6883 64.1516 54.8881 64.1932 57.2047 64.7318C59.2917 65.217 60.8597 65.9932 60.8315 65.98C62.0153 66.534 63.0866 66.0381 63.5873 65.0104C64.0338 64.0942 63.9101 62.9007 62.6271 62.2997C59.1904 60.6901 55.3455 59.9484 51.2122 60.2853C51.0281 60.3003 50.8744 60.4324 50.8339 60.6093Z"
                fill="black"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_0_1"
                x="0"
                y="0"
                width="115"
                height="126"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-15" dy="12" />
                <feGaussianBlur stdDeviation="3.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_1"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_1"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_0_1"
                x1="115"
                y1="53.5"
                x2="22"
                y2="53.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BC8959" />
                <stop offset="1" stop-color="#DAAF7E" />
              </linearGradient>
              <clipPath id="clip0_0_1">
                <rect
                  width="51"
                  height="50"
                  fill="white"
                  transform="translate(50 29)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="accordion-h">For biscuit</span>

          {accordionDataRight.map((item, index) => (
            <AccItemsRight
              key={index}
              title={item.title}
              content={item.content}
              expanded={index === 0}
              totalItems={accordionDataRight.length}
              isOpen={index === 0 ? isFirstOpenRight : false}
              index={index}
              onClick={() => handleItemClickRight(index)}
            />
          ))}
        </div>

        <div className="image-container">
          <div className="hexagon">
            <img src={accordionDataRight[0].image} alt={accordionDataRight[0].title} />
          </div>
          <div class="hexa-container-right">
            <div class="center center1"></div>
            <div class="center center2"></div>
            <div class="center center3"></div>
          </div>
        </div>
      </div>



      <div className="accordion-layout" id="layout-3">
        <div className="image-container">
          <div className="hexagon">
            <img src={accordionData[0].image} alt={accordionData[0].title} />
          </div>
          <div class="hexa-container">
            <div class="center center1"></div>
            <div class="center center2"></div>
            <div class="center center3"></div>
          </div>
        </div>

        <div className="accordion-container">
          <svg
            width="100"
            height="126"
            className="svg-icon"
            viewBox="0 0 115 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_0_1)">
              <path
                d="M114.816 80.368C114.275 80.6846 113.736 81.0037 113.197 81.3226C112.529 81.7176 111.862 82.1125 111.192 82.5024C109.212 83.6637 107.228 84.821 105.24 85.9663M114.816 80.368C114.85 80.3451 114.897 80.3427 114.944 80.3402C114.963 80.3392 114.982 80.3383 115 80.336M114.816 80.368L114.797 80.336L115 80.336M114.816 80.368L114.794 80.336L114.5 80.336L114.5 80.231L114.5 80.126L114.5 80.021L114.5 79.9734M115 80.336L115 26.5836M115 80.336L114.938 79.8398L114.94 79.8396C114.94 79.8396 114.936 79.8399 114.924 79.8406L114.92 79.8408C114.907 79.8414 114.881 79.8428 114.855 79.8452C114.806 79.8498 114.681 79.8632 114.556 79.9408C114.537 79.9517 114.519 79.9626 114.5 79.9734M115 26.5836L114.996 26.5796M115 26.5836L114.994 26.5836L114.996 26.5796M115 26.5836L114.991 26.5924L114.821 27.0481C114.745 27.0196 114.678 26.9983 114.602 26.9738C114.57 26.9637 114.537 26.9529 114.5 26.9409M114.996 26.5796C114.912 26.5481 114.825 26.5202 114.738 26.4923C114.548 26.4313 114.358 26.3701 114.19 26.2712M114.996 26.5796L114.992 26.5836L114.5 26.5836L114.5 26.6886L114.5 26.7935L114.5 26.8985L114.5 26.9409M114.19 26.2712C113.014 25.5828 111.84 24.8895 110.666 24.196C109.252 23.3607 107.838 22.5252 106.418 21.6981M114.19 26.2712L113.936 26.7019C113.937 26.7021 113.937 26.7022 113.937 26.7023M114.19 26.2712L113.938 26.7028C113.938 26.7026 113.937 26.7025 113.937 26.7023M106.418 21.6981C105.213 20.9972 104.001 20.3055 102.789 19.6137C101.743 19.0171 100.698 18.4204 99.6563 17.8177M106.418 21.6981L106.167 22.1301M106.418 21.6981L106.167 22.1303C106.167 22.1302 106.167 22.1302 106.167 22.1301M99.6563 17.8177C98.2904 17.0286 96.9281 16.2351 95.5659 15.4417C94.018 14.5401 92.4704 13.6386 90.9183 12.744C89.4134 11.8751 87.9041 11.0126 86.3945 10.1499C84.9891 9.34673 83.5833 8.54336 82.1802 7.7344C80.9477 7.0236 79.7182 6.30679 78.4886 5.58998C77.2591 4.87318 76.0295 4.15637 74.797 3.44558M99.6563 17.8177L99.4059 18.2505C99.406 18.2505 99.4061 18.2506 99.4062 18.2507M99.6563 17.8177L99.4062 18.2507M74.797 3.44558C72.8089 2.30029 70.8088 1.17503 68.8006 0.0617755M74.797 3.44558L74.5472 3.87871C74.5473 3.87875 74.5474 3.87879 74.5474 3.87883M74.797 3.44558L74.5474 3.87883M68.8006 0.0617755C68.6363 -0.0263235 68.3357 -0.0183145 68.1713 0.0737889C66.7929 0.842204 65.4227 1.6272 64.0517 2.41271C63.7722 2.57281 63.4927 2.73294 63.2131 2.89296C62.8333 3.10938 62.4533 3.32558 62.0732 3.54181C60.8287 4.24984 59.5835 4.95826 58.343 5.67608C57.4632 6.18468 56.5853 6.69727 55.7075 7.20987C54.8297 7.72243 53.9519 8.23498 53.0722 8.74353M68.8006 0.0617755L68.5582 0.499074C68.5628 0.501642 68.5675 0.50421 68.5721 0.506777M68.8006 0.0617755L68.5644 0.502447C68.576 0.508684 68.5796 0.508689 68.5721 0.506777M53.0722 8.74353C52.3053 9.188 51.5339 9.62464 50.7627 10.0611C50.0749 10.4505 49.3872 10.8397 48.7031 11.2343C47.7457 11.7856 46.7906 12.3428 45.8354 12.9001C45.035 13.367 44.2345 13.8341 43.4323 14.2978M53.0722 8.74353L53.3224 9.17641M53.0722 8.74353L53.3229 9.17613C53.3227 9.17622 53.3225 9.17632 53.3224 9.17641M43.4323 14.2978C42.6146 14.7703 41.7939 15.2408 40.9732 15.7113C40.1525 16.1819 39.3318 16.6524 38.5141 17.1249M43.4323 14.2978L43.6824 14.7307C42.8639 15.2037 42.0424 15.6747 41.2219 16.1451C40.401 16.6157 39.5811 17.0858 38.7643 17.5579M43.4323 14.2978L43.6825 14.7307C44.4903 14.2637 45.291 13.7966 46.0905 13.3301C47.0428 12.7745 47.9934 12.2199 48.9526 11.6676L48.953 11.6674C49.6222 11.2814 50.3115 10.8912 51.003 10.4997C51.7817 10.0588 52.5633 9.61634 53.3224 9.17641M38.5141 17.1249C37.8294 17.521 37.1465 17.9206 36.4633 18.3204C35.7027 18.7655 34.9416 19.2109 34.1771 19.6518C33.491 20.0471 32.8027 20.4374 32.1147 20.8276C31.179 21.3582 30.2437 21.8886 29.3151 22.4309C27.9381 23.2334 26.5689 24.0457 25.1994 24.8581C24.6075 25.2092 24.0156 25.5604 23.4229 25.9108C23.3379 25.9603 23.2545 26.0137 23.1712 26.0671C22.9913 26.1824 22.8118 26.2974 22.6173 26.3713M38.5141 17.1249L38.7643 17.5579M38.5141 17.1249L38.7644 17.5578C38.7644 17.5578 38.7643 17.5578 38.7643 17.5579M22.6173 26.3713C22.1162 26.5636 22 26.8999 22 27.4125M22.6173 26.3713L22.7949 26.8387C22.7951 26.8387 22.7953 26.8386 22.7955 26.8385M22.6173 26.3713L22.7964 26.8382C22.7961 26.8383 22.7958 26.8384 22.7955 26.8385M22 27.4125C22.016 44.78 22.016 62.1515 22 79.5191M22 27.4125L22.5 27.412M22 27.4125L22.5 27.4125C22.5 27.4124 22.5 27.4122 22.5 27.412M22 79.5191C22 80.0917 22.2004 80.404 22.6774 80.6804M22 79.5191L22.5 79.5191C22.5 79.5192 22.5 79.5194 22.5 79.5195M22 79.5191L22.5 79.5195M22.6774 80.6804C24.0454 81.4706 25.4075 82.2701 26.7695 83.0695C27.9336 83.7528 29.0976 84.436 30.2651 85.1133C31.584 85.8814 32.9071 86.6399 34.2303 87.3983C35.163 87.933 36.0957 88.4676 37.027 89.0057M22.6774 80.6804L22.928 80.2477M22.6774 80.6804L22.9275 80.2474C22.9277 80.2475 22.9279 80.2476 22.928 80.2477M37.027 89.0057C38.4491 89.8259 39.8689 90.6495 41.2883 91.4729C42.5093 92.1812 43.7299 92.8893 44.9514 93.5949M37.027 89.0057L37.2772 88.5728C37.277 88.5727 37.2769 88.5726 37.2768 88.5726M37.027 89.0057L37.2768 88.5726M44.9514 93.5949C45.8757 94.1271 46.8016 94.657 47.7277 95.187C48.8778 95.8452 50.0283 96.5036 51.1762 97.1669M44.9514 93.5949L45.2015 93.1619M44.9514 93.5949L45.2009 93.1616C45.2011 93.1617 45.2013 93.1618 45.2015 93.1619M51.1762 97.1669C52.2772 97.8004 53.3769 98.44 54.4767 99.0796C55.379 99.6044 56.2814 100.129 57.1846 100.651M51.1762 97.1669L51.4264 96.734M51.1762 97.1669L51.4256 96.7335C51.4259 96.7337 51.4261 96.7338 51.4264 96.734M57.1846 100.651C59.2529 101.844 61.3292 103.029 63.4055 104.211M57.1846 100.651L57.4347 100.218C57.4346 100.218 57.4346 100.218 57.4345 100.218M57.1846 100.651L57.4345 100.218M63.4055 104.211C64.0715 104.589 64.7389 104.963 65.4063 105.338C66.3133 105.846 67.2203 106.355 68.1232 106.874M63.4055 104.211L63.6527 103.776M63.4055 104.211L63.6525 103.776C63.6526 103.776 63.6527 103.776 63.6527 103.776M68.1232 106.874C68.4078 107.034 68.6002 107.05 68.9048 106.874M68.1232 106.874L68.3724 106.44C68.3718 106.44 68.3712 106.44 68.3705 106.439M68.1232 106.874L68.3685 106.438C68.3692 106.438 68.3698 106.439 68.3705 106.439M68.9048 106.874C70.4784 105.964 72.0593 105.066 73.6401 104.168C74.9183 103.442 76.1964 102.717 77.4705 101.984C78.5884 101.342 79.7016 100.691 80.8146 100.04C81.7568 99.4886 82.6988 98.9375 83.6433 98.3923C84.8898 97.6734 86.1404 96.9596 87.391 96.2458C88.6416 95.532 89.8922 94.8182 91.1387 94.0994C92.4439 93.3477 93.7456 92.588 95.0476 91.8283C96.2007 91.1553 97.354 90.4823 98.51 89.8146C99.7035 89.1256 100.899 88.4446 102.095 87.7636C103.144 87.1662 104.193 86.5689 105.24 85.9663M68.9048 106.874L68.6545 106.441C70.2265 105.532 71.8128 104.631 73.397 103.731C74.6761 103.005 75.9537 102.279 77.2214 101.551L77.2215 101.551C78.3424 100.907 79.4491 100.26 80.5576 99.611C81.4983 99.0605 82.4403 98.5094 83.3933 97.9592L83.3935 97.9591C84.6407 97.2399 85.8918 96.5258 87.1418 95.8124L87.1431 95.8116C88.3939 95.0977 89.6435 94.3845 90.889 93.6663L90.8892 93.6662C92.1982 92.9122 93.4946 92.1556 94.7927 91.3981C95.9438 90.7263 97.0962 90.0538 98.2599 89.3817L98.26 89.3816C99.4499 88.6947 100.651 88.0106 101.85 87.3274C102.901 86.729 103.951 86.1312 104.99 85.5329M68.9048 106.874L68.6545 106.441C68.5999 106.473 68.5643 106.487 68.5427 106.494C68.5238 106.5 68.5161 106.5 68.5148 106.5L68.5147 106.5L68.5147 106.5C68.5124 106.5 68.4786 106.5 68.3705 106.439M105.24 85.9663L104.99 85.5329M105.24 85.9663L104.99 85.533C104.99 85.533 104.99 85.533 104.99 85.5329M104.99 85.5329C106.977 84.3885 108.96 83.232 110.939 82.0711L110.941 82.0703C111.612 81.6796 112.274 81.2876 112.939 80.8944C113.456 80.5881 113.975 80.2811 114.5 79.9734M114.5 79.9734L114.5 79.9161L114.5 79.8111L114.5 79.7061L114.5 79.6011L114.5 79.4962L114.5 79.3912L114.5 79.2862L114.5 79.1812L114.5 79.0762L114.5 78.9713L114.5 78.8663L114.5 78.7613L114.5 78.6563L114.5 78.5513L114.5 78.4464L114.5 78.3414L114.5 78.2364L114.5 78.1314L114.5 78.0265L114.5 77.9215L114.5 77.8165L114.5 77.7115L114.5 77.6065L114.5 77.5016L114.5 77.3966L114.5 77.2916L114.5 77.1866L114.5 77.0816L114.5 76.9767L114.5 76.8717L114.5 76.7667L114.5 76.6617L114.5 76.5567L114.5 76.4518L114.5 76.3468L114.5 76.2418L114.5 76.1368L114.5 76.0318L114.5 75.9268L114.5 75.8219L114.5 75.7169L114.5 75.6119L114.5 75.5069L114.5 75.4019L114.5 75.297L114.5 75.192L114.5 75.087L114.5 74.982L114.5 74.877L114.5 74.7721L114.5 74.6671L114.5 74.5621L114.5 74.4571L114.5 74.3521L114.5 74.2471L114.5 74.1422L114.5 74.0372L114.5 73.9322L114.5 73.8272L114.5 73.7222L114.5 73.6173L114.5 73.5123L114.5 73.4073L114.5 73.3023L114.5 73.1973L114.5 73.0923L114.5 72.9874L114.5 72.8824L114.5 72.7774L114.5 72.6724L114.5 72.5674L114.5 72.4624L114.5 72.3575L114.5 72.2525L114.5 72.1475L114.5 72.0425L114.5 71.9375L114.5 71.8325L114.5 71.7276L114.5 71.6226L114.5 71.5176L114.5 71.4126L114.5 71.3076L114.5 71.2026L114.5 71.0977L114.5 70.9927L114.5 70.8877L114.5 70.7827L114.5 70.6777L114.5 70.5727L114.5 70.4678L114.5 70.3628L114.5 70.2578L114.5 70.1528L114.5 70.0478L114.5 69.9428L114.5 69.8378L114.5 69.7329L114.5 69.6279L114.5 69.5229L114.5 69.4179L114.5 69.3129L114.5 69.2079L114.5 69.103L114.5 68.998L114.5 68.893L114.5 68.788L114.5 68.683L114.5 68.578L114.5 68.473L114.5 68.368L114.5 68.2631L114.5 68.1581L114.5 68.0531L114.5 67.9481L114.5 67.8431L114.5 67.7381L114.5 67.6331L114.5 67.5282L114.5 67.4232L114.5 67.3182L114.5 67.2132L114.5 67.1082L114.5 67.0032L114.5 66.8982L114.5 66.7933L114.5 66.6883L114.5 66.5833L114.5 66.4783L114.5 66.3733L114.5 66.2683L114.5 66.1633L114.5 66.0584L114.5 65.9534L114.5 65.8484L114.5 65.7434L114.5 65.6384L114.5 65.5334L114.5 65.4284L114.5 65.3235L114.5 65.2185L114.5 65.1135L114.5 65.0085L114.5 64.9035L114.5 64.7985L114.5 64.6935L114.5 64.5885L114.5 64.4836L114.5 64.3786L114.5 64.2736L114.5 64.1686L114.5 64.0636L114.5 63.9586L114.5 63.8536L114.5 63.7486L114.5 63.6437L114.5 63.5387L114.5 63.4337L114.5 63.3287L114.5 63.2237L114.5 63.1187L114.5 63.0137L114.5 62.9087L114.5 62.8038L114.5 62.6988L114.5 62.5938L114.5 62.4888L114.5 62.3838L114.5 62.2788L114.5 62.1738L114.5 62.0688L114.5 61.9639L114.5 61.8589L114.5 61.7539L114.5 61.6489L114.5 61.5439L114.5 61.4389L114.5 61.3339L114.5 61.2289L114.5 61.124L114.5 61.019L114.5 60.914L114.5 60.809L114.5 60.704L114.5 60.599L114.5 60.494L114.5 60.389L114.5 60.284L114.5 60.1791L114.5 60.0741L114.5 59.9691L114.5 59.8641L114.5 59.7591L114.5 59.6541L114.5 59.5491L114.5 59.4441L114.5 59.3392L114.5 59.2342L114.5 59.1292L114.5 59.0242L114.5 58.9192L114.5 58.8142L114.5 58.7092L114.5 58.6042L114.5 58.4992L114.5 58.3943L114.5 58.2893L114.5 58.1843L114.5 58.0793L114.5 57.9743L114.5 57.8693L114.5 57.7643L114.5 57.6593L114.5 57.5543L114.5 57.4494L114.5 57.3444L114.5 57.2394L114.5 57.1344L114.5 57.0294L114.5 56.9244L114.5 56.8194L114.5 56.7144L114.5 56.6094L114.5 56.5045L114.5 56.3995L114.5 56.2945L114.5 56.1895L114.5 56.0845L114.5 55.9795L114.5 55.8745L114.5 55.7695L114.5 55.6645L114.5 55.5596L114.5 55.4546L114.5 55.3496L114.5 55.2446L114.5 55.1396L114.5 55.0346L114.5 54.9296L114.5 54.8246L114.5 54.7196L114.5 54.6147L114.5 54.5097L114.5 54.4047L114.5 54.2997L114.5 54.1947L114.5 54.0897L114.5 53.9847L114.5 53.8797L114.5 53.7747L114.5 53.6698L114.5 53.5648L114.5 53.4598L114.5 53.3548L114.5 53.2498L114.5 53.1448L114.5 53.0398L114.5 52.9348L114.5 52.8298L114.5 52.7248L114.5 52.6199L114.5 52.5149L114.5 52.4099L114.5 52.3049L114.5 52.1999L114.5 52.0949L114.5 51.9899L114.5 51.8849L114.5 51.7799L114.5 51.675L114.5 51.57L114.5 51.465L114.5 51.36L114.5 51.255L114.5 51.15L114.5 51.045L114.5 50.94L114.5 50.835L114.5 50.7301L114.5 50.6251L114.5 50.5201L114.5 50.4151L114.5 50.3101L114.5 50.2051L114.5 50.1001L114.5 49.9951L114.5 49.8901L114.5 49.7852L114.5 49.6802L114.5 49.5752L114.5 49.4702L114.5 49.3652L114.5 49.2602L114.5 49.1552L114.5 49.0502L114.5 48.9452L114.5 48.8403L114.5 48.7353L114.5 48.6303L114.5 48.5253L114.5 48.4203L114.5 48.3153L114.5 48.2103L114.5 48.1053L114.5 48.0004L114.5 47.8954L114.5 47.7904L114.5 47.6854L114.5 47.5804L114.5 47.4754L114.5 47.3704L114.5 47.2654L114.5 47.1604L114.5 47.0555L114.5 46.9505L114.5 46.8455L114.5 46.7405L114.5 46.6355L114.5 46.5305L114.5 46.4255L114.5 46.3205L114.5 46.2155L114.5 46.1106L114.5 46.0056L114.5 45.9006L114.5 45.7956L114.5 45.6906L114.5 45.5856L114.5 45.4806L114.5 45.3756L114.5 45.2707L114.5 45.1657L114.5 45.0607L114.5 44.9557L114.5 44.8507L114.5 44.7457L114.5 44.6407L114.5 44.5357L114.5 44.4308L114.5 44.3258L114.5 44.2208L114.5 44.1158L114.5 44.0108L114.5 43.9058L114.5 43.8008L114.5 43.6958L114.5 43.5909L114.5 43.4859L114.5 43.3809L114.5 43.2759L114.5 43.1709L114.5 43.0659L114.5 42.9609L114.5 42.8559L114.5 42.751L114.5 42.646L114.5 42.541L114.5 42.436L114.5 42.331L114.5 42.226L114.5 42.121L114.5 42.016L114.5 41.9111L114.5 41.8061L114.5 41.7011L114.5 41.5961L114.5 41.4911L114.5 41.3861L114.5 41.2811L114.5 41.1762L114.5 41.0712L114.5 40.9662L114.5 40.8612L114.5 40.7562L114.5 40.6512L114.5 40.5462L114.5 40.4412L114.5 40.3363L114.5 40.2313L114.5 40.1263L114.5 40.0213L114.5 39.9163L114.5 39.8113L114.5 39.7063L114.5 39.6014L114.5 39.4964L114.5 39.3914L114.5 39.2864L114.5 39.1814L114.5 39.0764L114.5 38.9714L114.5 38.8665L114.5 38.7615L114.5 38.6565L114.5 38.5515L114.5 38.4465L114.5 38.3415L114.5 38.2365L114.5 38.1316L114.5 38.0266L114.5 37.9216L114.5 37.8166L114.5 37.7116L114.5 37.6066L114.5 37.5016L114.5 37.3967L114.5 37.2917L114.5 37.1867L114.5 37.0817L114.5 36.9767L114.5 36.8717L114.5 36.7668L114.5 36.6618L114.5 36.5568L114.5 36.4518L114.5 36.3468L114.5 36.2418L114.5 36.1368L114.5 36.0319L114.5 35.9269L114.5 35.8219L114.5 35.7169L114.5 35.6119L114.5 35.5069L114.5 35.402L114.5 35.297L114.5 35.192L114.5 35.087L114.5 34.982L114.5 34.877L114.5 34.7721L114.5 34.6671L114.5 34.5621L114.5 34.4571L114.5 34.3521L114.5 34.2471L114.5 34.1422L114.5 34.0372L114.5 33.9322L114.5 33.8272L114.5 33.7222L114.5 33.6172L114.5 33.5123L114.5 33.4073L114.5 33.3023L114.5 33.1973L114.5 33.0923L114.5 32.9874L114.5 32.8824L114.5 32.7774L114.5 32.6724L114.5 32.5674L114.5 32.4624L114.5 32.3575L114.5 32.2525L114.5 32.1475L114.5 32.0425L114.5 31.9375L114.5 31.8326L114.5 31.7276L114.5 31.6226L114.5 31.5176L114.5 31.4126L114.5 31.3076L114.5 31.2027L114.5 31.0977L114.5 30.9927L114.5 30.8877L114.5 30.7827L114.5 30.6778L114.5 30.5728L114.5 30.4678L114.5 30.3628L114.5 30.2578L114.5 30.1529L114.5 30.0479L114.5 29.9429L114.5 29.8379L114.5 29.7329L114.5 29.628L114.5 29.523L114.5 29.418L114.5 29.313L114.5 29.208L114.5 29.1031L114.5 28.9981L114.5 28.8931L114.5 28.7881L114.5 28.6831L114.5 28.5782L114.5 28.4732L114.5 28.3682L114.5 28.2632L114.5 28.1582L114.5 28.0533L114.5 27.9483L114.5 27.8433L114.5 27.7383L114.5 27.6334L114.5 27.5284L114.5 27.4234L114.5 27.3184L114.5 27.2134L114.5 27.1085L114.5 27.0035L114.5 26.9409M68.3705 106.439C67.4681 105.92 66.5555 105.409 65.6456 104.899C64.9782 104.524 64.3123 104.151 63.6527 103.776M63.6527 103.776C61.5768 102.595 59.5015 101.41 57.4345 100.218M57.4345 100.218C56.5356 99.6986 55.6337 99.1741 54.731 98.6491C53.6291 98.0083 52.5262 97.3668 51.4264 96.734M51.4264 96.734C50.2792 96.0711 49.1261 95.4112 47.9742 94.752C47.0478 94.2218 46.1223 93.6922 45.2015 93.1619M45.2015 93.1619C43.9824 92.4577 42.7611 91.7493 41.5391 91.0404C40.1187 90.2164 38.6973 89.3918 37.2768 88.5726M37.2768 88.5726C36.342 88.0325 35.4085 87.4974 34.4758 86.9627C33.1546 86.2054 31.8352 85.4491 30.5167 84.6813L30.516 84.6808C29.3561 84.008 28.1919 83.3246 27.0263 82.6405C25.6606 81.8389 24.2929 81.0361 22.928 80.2477M22.928 80.2477C22.7322 80.1343 22.6402 80.0403 22.5894 79.9549C22.5397 79.8715 22.5001 79.7472 22.5 79.5195M22.5 79.5195C22.516 62.1517 22.516 44.7799 22.5 27.412M22.5 27.412C22.5 27.1825 22.5285 27.0698 22.5621 27.0068C22.585 26.9637 22.6316 26.9016 22.7955 26.8385M22.7955 26.8385C22.9828 26.7673 23.1492 26.6712 23.2898 26.5839C23.3525 26.545 23.4057 26.5108 23.4551 26.4791C23.5301 26.4309 23.5965 26.3883 23.6743 26.3431L23.6774 26.3412C24.2713 25.9901 24.8638 25.6386 25.4559 25.2873C26.8248 24.4752 28.1914 23.6645 29.5669 22.8629L29.5673 22.8627C30.4958 22.3204 31.4238 21.7942 32.3556 21.2658C33.0434 20.8758 33.7332 20.4846 34.4268 20.085L34.427 20.0849C35.1861 19.647 35.9538 19.1978 36.7195 18.7498C37.4052 18.3485 38.0893 17.9482 38.7643 17.5579M53.3224 9.17641C54.2027 8.66757 55.0808 8.15482 55.9578 7.64271L55.9597 7.64158L55.9603 7.64125C56.8381 7.12869 57.7147 6.61678 58.5933 6.10897L58.5935 6.10885C59.8321 5.39208 61.0751 4.68495 62.3191 3.97716C62.6996 3.76072 63.0801 3.54423 63.4606 3.32738L63.4614 3.32692C63.7415 3.16664 64.0213 3.00633 64.301 2.84611C65.6707 2.06137 67.0366 1.27883 68.4109 0.512667M68.4109 0.512667C68.4132 0.511872 68.4185 0.5101 68.4274 0.508066C68.4456 0.503899 68.4698 0.50067 68.4967 0.50009C68.5238 0.499509 68.5468 0.501734 68.5631 0.504804C68.567 0.505549 68.57 0.506239 68.5721 0.506777M68.4109 0.512667C68.4122 0.51195 68.4135 0.511235 68.4148 0.510518C68.4115 0.51234 68.4097 0.513091 68.4097 0.513106C68.4097 0.513114 68.4101 0.512962 68.4109 0.512667ZM68.5721 0.506777C70.5738 1.61652 72.5668 2.73786 74.5474 3.87883M74.5474 3.87883C75.7787 4.58891 77.0072 5.30508 78.2368 6.02194L78.2374 6.02228C79.4666 6.73887 80.6969 7.45616 81.9305 8.16753L81.9305 8.16755C83.3434 8.98221 84.7469 9.78426 86.1491 10.5856C87.6537 11.4454 89.1568 12.3043 90.6683 13.177L90.6686 13.1772C92.2236 14.0735 93.7669 14.9724 95.3117 15.8722C96.6725 16.6648 98.0343 17.4581 99.4062 18.2507M99.4062 18.2507C100.457 18.8588 101.502 19.4551 102.546 20.0506C103.753 20.7394 104.958 21.427 106.167 22.1301M106.167 22.1301C107.587 22.9581 108.998 23.7911 110.409 24.6248C111.582 25.3176 112.756 26.0109 113.937 26.7023M113.937 26.7023C114.104 26.8005 114.276 26.8655 114.424 26.9154C114.451 26.9246 114.476 26.9331 114.5 26.9409"
                stroke="url(#paint0_linear_0_1)"
                shape-rendering="crispEdges"
              />
            </g>
            <g clip-path="url(#clip0_0_1)">
              <path
                d="M75.2202 68.7757L75.2202 68.7757C75.1096 68.9165 75.127 69.0652 75.2308 69.1847C75.3365 69.3063 75.4986 69.3554 75.6717 69.2646C79.8603 67.0671 84.0706 64.3994 87.8625 61.5122C94.4689 56.4815 98.7488 51.5821 100.04 47.7389C100.725 45.698 100.576 43.9969 99.6879 42.6201L99.6879 42.62C97.949 39.923 94.6244 38.3517 90.0237 38.1746L75.2202 68.7757ZM75.2202 68.7757C78.4581 64.6543 81.8596 59.4215 84.5539 54.058C87.244 48.7026 89.2496 43.1767 89.6571 38.478L89.6571 38.478M75.2202 68.7757L89.6571 38.478M89.6571 38.478C89.6715 38.3121 89.8223 38.1669 90.0236 38.1746L89.6571 38.478Z"
                fill="#B68556"
                stroke="black"
              />
              <path
                d="M56.3758 47.2093C55.6685 48.3931 55.0151 49.5894 54.4179 50.7903C54.2644 51.099 54.5368 51.446 54.8806 51.3813C57.2615 50.9327 59.8711 50.8606 62.5846 51.4783C64.6855 51.9566 66.2686 52.7525 66.2165 52.728C67.5092 53.3333 68.536 52.6845 68.9805 51.7727C69.4289 50.8523 69.3029 49.6526 68.0105 49.0471C64.4829 47.4033 60.6785 46.7156 56.7121 47.0031C56.5726 47.0133 56.4464 47.091 56.3758 47.2093Z"
                fill="black"
              />
              <path
                d="M62.0261 39.4401C61.7567 39.745 62.0439 40.2092 62.4446 40.1178C66.8459 39.1134 70.9898 39.5739 74.6685 41.2959C75.9617 41.9012 76.9885 41.2523 77.4328 40.3407C77.8812 39.4203 77.7552 38.2206 76.4628 37.615C73.3394 36.1598 69.836 35.3874 66.108 35.5085C66.0072 35.5117 65.9106 35.55 65.8356 35.6161C64.528 36.7719 63.2523 38.0522 62.0261 39.4401Z"
                fill="black"
              />
              <path
                d="M84.5631 30.2509C79.7602 27.4018 73.6005 29.866 68.9049 33.1782C68.5838 33.4047 68.7209 33.8967 69.1147 33.9326C71.8379 34.1805 74.5607 34.8839 77.1939 36.111C81.71 38.2155 78.4897 44.9277 73.9396 42.8009C69.2069 40.5886 64.133 40.8942 59.3563 42.8461C59.2828 42.8762 59.2191 42.9257 59.1727 42.9891C58.7803 43.5242 58.3954 44.0701 58.0187 44.6265C57.8299 44.9053 58.0359 45.2753 58.3771 45.2743C62.1243 45.2633 65.7538 46.1108 68.7542 47.5491C70.8513 48.5545 71.3935 50.6851 70.5135 52.4909C69.6405 54.2823 67.6012 55.2218 65.4859 54.2322C61.8764 52.5436 57.7798 52.1924 53.3609 53.4537C53.2366 53.4892 53.1349 53.5794 53.0857 53.6967C52.4762 55.1498 51.9517 56.6 51.5185 58.0333C51.4352 58.3088 51.6525 58.5826 51.9453 58.5687C55.8587 58.3826 59.7134 59.0895 63.3596 60.7961C65.5857 61.8381 65.9307 64.0668 65.1209 65.7286C64.2485 67.5188 62.2153 68.4703 60.1073 67.4869C57.2365 66.1474 53.9326 65.6022 50.4114 66.0895C50.2064 66.118 50.0489 66.2843 50.0426 66.4871C49.8662 72.0839 51.5927 76.2318 54.9562 78.227C58.7069 80.4505 63.4817 77.4507 66.7735 74.6147C78.8087 64.2488 94.0601 35.8836 84.5631 30.2509Z"
                fill="black"
              />
              <path
                d="M50.8339 60.6093C50.5786 61.7267 50.3823 62.828 50.2474 63.9061C50.2138 64.1747 50.444 64.4023 50.7182 64.3717C52.6883 64.1516 54.8881 64.1932 57.2047 64.7318C59.2917 65.217 60.8597 65.9932 60.8315 65.98C62.0153 66.534 63.0866 66.0381 63.5873 65.0104C64.0338 64.0942 63.9101 62.9007 62.6271 62.2997C59.1904 60.6901 55.3455 59.9484 51.2122 60.2853C51.0281 60.3003 50.8744 60.4324 50.8339 60.6093Z"
                fill="black"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_0_1"
                x="0"
                y="0"
                width="115"
                height="126"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-15" dy="12" />
                <feGaussianBlur stdDeviation="3.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_1"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_1"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_0_1"
                x1="115"
                y1="53.5"
                x2="22"
                y2="53.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BC8959" />
                <stop offset="1" stop-color="#DAAF7E" />
              </linearGradient>
              <clipPath id="clip0_0_1">
                <rect
                  width="51"
                  height="50"
                  fill="white"
                  transform="translate(50 29)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="accordion-h">For biscuit</span>

          {accordionData.map((item, index) => (
            <AccItems
              key={index}
              title={item.title}
              content={item.content}
              expanded={index === 0}
              totalItems={accordionData.length}
              isOpen={index === 0 ? isFirstOpen : false}
              index={index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Tasty;
