import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../../assets/home/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);
  const [navbarBg, setNavbarBg] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openMenu = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className={navbarBg ? 'navbar-black' : ''}>
        <section class="flex_content">
          <figure class="logo fixed_flex">
            <img src={logo} alt="" />
          </figure>
        </section>
        <section class="flex_content nav_content" id="nav_content">
          <a href="#" class="active">
            Home
          </a>
          <a href="#gallery">About us</a>
          <a href="#blogs">Blogs</a>
          <a class="contact_btn">beauty</a>
          <a href="#about">healthy</a>
          <a href="#about">tasty</a>
          <a href="#about">shop</a>
          <a href="#about">contact</a>
        </section>
        <section class="flex_content" >
          <a class="ham" onClick={openMenu}>
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14.5" cy="14.5" r="14.5" fill="#A2794F"/>
<path d="M6 10.5C6 10.6326 6.05268 10.7598 6.14645 10.8536C6.24021 10.9473 6.36739 11 6.5 11H19.5C19.6326 11 19.7598 10.9473 19.8536 10.8536C19.9473 10.7598 20 10.6326 20 10.5C20 10.3674 19.9473 10.2402 19.8536 10.1464C19.7598 10.0527 19.6326 10 19.5 10H6.5C6.36739 10 6.24021 10.0527 6.14645 10.1464C6.05268 10.2402 6 10.3674 6 10.5ZM8.5 14.5H19.5C19.6326 14.5 19.7598 14.5527 19.8536 14.6464C19.9473 14.7402 20 14.8674 20 15C20 15.1326 19.9473 15.2598 19.8536 15.3536C19.7598 15.4473 19.6326 15.5 19.5 15.5H8.5C8.36739 15.5 8.24021 15.4473 8.14645 15.3536C8.05268 15.2598 8 15.1326 8 15C8 14.8674 8.05268 14.7402 8.14645 14.6464C8.24021 14.5527 8.36739 14.5 8.5 14.5ZM13 19H19.5C19.6326 19 19.7598 19.0527 19.8536 19.1464C19.9473 19.2402 20 19.3674 20 19.5C20 19.6326 19.9473 19.7598 19.8536 19.8536C19.7598 19.9473 19.6326 20 19.5 20H13C12.8674 20 12.7402 19.9473 12.6464 19.8536C12.5527 19.7598 12.5 19.6326 12.5 19.5C12.5 19.3674 12.5527 19.2402 12.6464 19.1464C12.7402 19.0527 12.8674 19 13 19Z" fill="white"/>
</svg>

          </a>
          <div className="right_nav flex">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.084 15.0824L13.2726 12.2711C14.4248 10.8619 14.9913 9.06378 14.8549 7.24866C14.7186 5.43353 13.8897 3.74026 12.5399 2.51909C11.1901 1.29791 9.42255 0.642268 7.60288 0.687766C5.78321 0.733263 4.05063 1.47642 2.76353 2.76353C1.47642 4.05063 0.733263 5.78321 0.687766 7.60288C0.642268 9.42255 1.29791 11.1901 2.51909 12.5399C3.74026 13.8897 5.43353 14.7186 7.24866 14.8549C9.06378 14.9913 10.8619 14.4248 12.2711 13.2726L15.0824 16.084C15.216 16.213 15.3949 16.2844 15.5807 16.2828C15.7664 16.2812 15.9441 16.2067 16.0754 16.0754C16.2067 15.9441 16.2812 15.7664 16.2828 15.5807C16.2844 15.3949 16.213 15.216 16.084 15.0824ZM7.79155 13.4582C6.67079 13.4582 5.5752 13.1259 4.64332 12.5032C3.71144 11.8806 2.98513 10.9955 2.55624 9.96009C2.12734 8.92464 2.01512 7.78527 2.23377 6.68604C2.45242 5.58681 2.99212 4.57711 3.78461 3.78461C4.57711 2.99212 5.58681 2.45242 6.68604 2.23377C7.78527 2.01512 8.92464 2.12734 9.96009 2.55624C10.9955 2.98513 11.8806 3.71144 12.5032 4.64332C13.1259 5.5752 13.4582 6.67079 13.4582 7.79155C13.4565 9.29393 12.859 10.7343 11.7966 11.7966C10.7343 12.859 9.29393 13.4565 7.79155 13.4582Z"
                fill="white"
              />
            </svg>

            <div className="right_nav_icons flex">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_1_5776"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="21"
                  height="21"
                >
                  <path d="M0 0H21V21H0V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_1_5776)">
                  <path
                    d="M4.34766 4.34766H20.3848L17.9238 12.9609H6.80859"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 17.8828C10.5 18.5624 9.94908 19.1133 9.26953 19.1133C8.58998 19.1133 8.03906 18.5624 8.03906 17.8828C8.03906 17.2033 8.58998 16.6523 9.26953 16.6523C9.94908 16.6523 10.5 17.2033 10.5 17.8828Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.6934 17.8828C16.6934 18.5624 16.1424 19.1133 15.4629 19.1133C14.7833 19.1133 14.2324 18.5624 14.2324 17.8828C14.2324 17.2033 14.7833 16.6523 15.4629 16.6523C16.1424 16.6523 16.6934 17.2033 16.6934 17.8828Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.9237 15.4219H7.56897C6.65428 15.4219 6.05935 14.4593 6.46839 13.6411L6.8085 12.9609"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0.615234 1.88672H3.64469C4.69227 5.55388 6.80859 12.9609 6.80859 12.9609"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>

              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_5772)">
                  <path
                    d="M5.92468 0.477539C7.71235 0.477539 9.3858 1.28694 10.5 2.64308C11.6142 1.28689 13.2876 0.477539 15.0753 0.477539C18.3422 0.477539 21 3.13531 21 6.40222C21 8.96034 19.4746 11.9192 16.4663 15.1966C14.1512 17.7188 11.6327 19.6717 10.916 20.2102L10.5001 20.5226L10.0843 20.2102C9.36757 19.6717 6.849 17.7189 4.53383 15.1967C1.52543 11.9193 0 8.96039 0 6.40222C0 3.13531 2.65782 0.477539 5.92468 0.477539ZM5.55388 14.2604C7.45814 16.3349 9.50686 18.0119 10.5001 18.7848C11.4934 18.0119 13.542 16.3348 15.4463 14.2603C18.1737 11.2889 19.6154 8.57159 19.6154 6.40222C19.6154 3.89883 17.5787 1.86215 15.0753 1.86215C13.4279 1.86215 11.9068 2.76003 11.1055 4.20543L10.5 5.29771L9.89451 4.20543C9.09328 2.76008 7.57214 1.86215 5.92468 1.86215C3.42129 1.86215 1.38461 3.89879 1.38461 6.40222C1.38461 8.57168 2.82632 11.289 5.55388 14.2604Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_5772">
                    <rect
                      width="21"
                      height="21"
                      fill="white"
                      transform="matrix(-1 0 0 1 21 0)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99967 9.16683C7.66634 9.16683 5.83301 7.3335 5.83301 5.00016C5.83301 2.66683 7.66634 0.833496 9.99967 0.833496C12.333 0.833496 14.1663 2.66683 14.1663 5.00016C14.1663 7.3335 12.333 9.16683 9.99967 9.16683ZM9.99967 2.50016C8.58301 2.50016 7.49967 3.5835 7.49967 5.00016C7.49967 6.41683 8.58301 7.50016 9.99967 7.50016C11.4163 7.50016 12.4997 6.41683 12.4997 5.00016C12.4997 3.5835 11.4163 2.50016 9.99967 2.50016Z"
                  fill="white"
                />
                <path
                  d="M17.4998 19.1667C16.9998 19.1667 16.6665 18.8333 16.6665 18.3333C16.6665 14.6667 13.6665 11.6667 9.99984 11.6667C6.33317 11.6667 3.33317 14.6667 3.33317 18.3333C3.33317 18.8333 2.99984 19.1667 2.49984 19.1667C1.99984 19.1667 1.6665 18.8333 1.6665 18.3333C1.6665 13.75 5.4165 10 9.99984 10C14.5832 10 18.3332 13.75 18.3332 18.3333C18.3332 18.8333 17.9998 19.1667 17.4998 19.1667Z"
                  fill="white"
                />
              </svg>
            </div>

            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_5746)">
                <path
                  d="M19 9.5C19 14.7452 14.7491 18.9976 9.50436 19H9.40183C8.94133 18.9952 8.48176 18.9572 8.02671 18.8864C7.65408 18.8288 7.28528 18.7487 6.92233 18.6465C4.92961 18.0842 3.17506 16.8865 1.92554 15.2355C0.676012 13.5845 -0.000111558 11.5705 1.38062e-08 9.5C1.38062e-08 4.25402 4.25204 3.78998e-06 9.5 3.78998e-06H9.50436C10.7968 -0.0011524 12.0758 0.262236 13.2626 0.773954C14.4494 1.28567 15.5189 2.03489 16.4053 2.97548C18.0724 4.7387 19.0009 7.07345 19 9.5Z"
                  fill="white"
                />
                <path
                  d="M7.10251 6.67434V7.10184H5.72145L1.84229 3.87619C2.08206 3.55002 2.34253 3.23958 2.62208 2.94678L7.10251 6.67434Z"
                  fill="#C8102E"
                />
                <path
                  d="M17.17 3.89398L13.3134 7.10023H11.8975V6.70361L16.3933 2.96338L16.4052 2.97565C16.6643 3.24883 16.9068 3.53739 17.1312 3.83975L17.17 3.89398Z"
                  fill="#C8102E"
                />
                <path
                  d="M7.10261 11.897V12.3245L2.62217 16.0528C2.58259 16.0132 2.543 15.9705 2.50579 15.9289C2.27011 15.6729 2.04876 15.4039 1.84277 15.1234L5.72194 11.897H7.10261Z"
                  fill="#C8102E"
                />
                <path
                  d="M17.1704 15.1056C16.9316 15.432 16.6722 15.7428 16.3937 16.0362L11.8975 12.2956V11.897H13.3134L17.1704 15.1056Z"
                  fill="#C8102E"
                />
                <path
                  d="M3.79405 7.10222H0.305176C0.50338 6.34212 0.795931 5.60981 1.17601 4.92236L3.79405 7.10222Z"
                  fill="#012169"
                />
                <path
                  d="M3.71528 11.897L1.14791 14.0321C0.781016 13.3574 0.498006 12.6404 0.305176 11.897H3.71528Z"
                  fill="#012169"
                />
                <path
                  d="M7.10248 13.9048V18.6944C7.04231 18.6789 6.98373 18.6627 6.92238 18.6457C5.67758 18.2951 4.51781 17.6932 3.51465 16.8771L7.10248 13.9048Z"
                  fill="#012169"
                />
                <path
                  d="M7.10227 0.305176V5.01955L3.56787 2.0793C4.60797 1.2457 5.81237 0.641133 7.10227 0.305176Z"
                  fill="#012169"
                />
                <path
                  d="M15.4861 2.12373L11.8975 5.09841V0.305664L11.9517 0.319518C13.2441 0.66429 14.4488 1.27922 15.4861 2.12373Z"
                  fill="#012169"
                />
                <path
                  d="M18.6947 7.10187H15.2905L17.852 4.9707C18.2185 5.64418 18.5015 6.35985 18.6947 7.10187Z"
                  fill="#012169"
                />
                <path
                  d="M15.5165 16.8539C14.458 17.7217 13.224 18.3498 11.8994 18.6949V13.8447L15.5165 16.8539Z"
                  fill="#012169"
                />
                <path
                  d="M18.6946 11.897C18.5059 12.6224 18.2315 13.3228 17.8772 13.9834L15.3696 11.897H18.6946Z"
                  fill="#012169"
                />
                <path
                  d="M19 9.40065V9.59025C18.9959 10.0332 18.9611 10.4754 18.8959 10.9135H10.9135V18.8955C10.4781 18.9605 10.0388 18.9954 9.59856 19H9.40065C8.9603 18.9955 8.52079 18.9604 8.08529 18.8951V10.9135H0.1045C0.0395447 10.4776 0.00462911 10.0377 0 9.59698C0 9.53483 0 9.47229 0 9.40975C0.00409501 8.96665 0.0388797 8.52437 0.104104 8.08608H8.08648V0.1045C8.50098 0.0425299 8.91907 0.0076227 9.3381 0L9.64448 0C10.0444 0.00571742 10.4435 0.0366538 10.8395 0.092625L10.9135 0.103708V8.08608H18.8955C18.9604 8.52135 18.9954 8.96058 19 9.40065Z"
                  fill="#C8102E"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_5746">
                  <rect width="19" height="19" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </section>
      </nav>

      <menu
        id="menu"
        class="side_menu"
        className={`side_menu ${isOpen ? "open" : ""}`}
      >
        <a class="close" onClick={closeMenu}>
          <i class="fa fa-times"></i>
        </a>
        <strong class="fixed_flex logo">
          <img
            src={logo}
            alt="Summit"
            loading="lazy"
          />
        </strong>
        <br />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Basic Parameters</a>
          </li>
          <li>
            <a href="#">Notifications</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li
            className={`dropdown ${isDropdownOpen ? "open" : ""}`}
            onClick={toggleDropdown}
          >
            <a href="#">Features</a>
          </li>
          <li class="dropdown">
            <a href="javascript:void(0)">Mandatory Disclosure</a>
            <aside style={{ display: isDropdownOpen ? "block" : "none" }}>
              <a href="#">Society registration</a>
              <a href="#">NOC</a>
            </aside>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li class="fixed_flex">
            <a href="javascript:void(0)" class="btn btn_1 chat_popup">
              SignUp/LogIn
            </a>{" "}
            <a href="#" class="btn btn_2 chat_popup">
              Admission
            </a>{" "}
          </li>
        </ul>
      </menu>
    </>
  );
}

export default Navbar;
