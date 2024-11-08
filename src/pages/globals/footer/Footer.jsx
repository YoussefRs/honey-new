import React from "react";
import "./Footer.css";
import Ddivider from "../divider/Ddivider";
import logo from "../../../assets/home/logo.png";

function Footer() {
  return (
    <>
      <footer class="upper-footer-container">
        <div class="newsletter">
          <div className="news">
            <h1>Newsletter</h1>
            <Ddivider />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero sed
              veritatis pariatur debitis, tenetur expedita, quo voluptate animi
              quibusdam quam dolore aut minus eum harum exercitationem neque
              quod iste ut?
            </p>
          </div>
          <div class="email">
            <input type="email" placeholder="Your email" />
            <button>send</button>
          </div>
        </div>
      </footer>

      <footer>
        <div class="footer-container">
          <div class="footer-section">
            <img src={logo} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              quas hic omnis in dolorum! Molestiae, nesciunt quisquam voluptatem
              nisi id exercitationem, natus possimus, recusandae consequatur
              maiores facere deleniti autem odit.
            </p>
          </div>
          <div class="footer-section end">
            <h3>Menu</h3>
            <ul>
              <li>
                <a href="#">
                  <i class="fas fa-info-circle"></i> Home
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-info-circle"></i> About Us
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-shield-alt"></i> Beauty
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-file-contract"></i> Healthy
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-file-contract"></i> Tasty
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-file-contract"></i> Shop
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-envelope"></i> Contact
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-section end" id="shop">
            <h3>Shop</h3>
            <ul>
              <li>
                <a href="#">
                  <i class="fas fa-laptop-code"></i> Honeys
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-mobile-alt"></i> Health & Nutrition
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-chart-line"></i> Candles & Wax
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-cloud"></i> Body Care
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-section end">
            <h3>Connect With Us</h3>
            <div class="social-links">
              <a href="#" target="_blank" aria-label="Facebook">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_5661)">
<path d="M32 16C32 7.1625 24.8375 0 16 0C7.1625 0 0 7.1625 0 16C0 24.8375 7.1625 32 16 32C16.0938 32 16.1875 32 16.2812 31.9937V19.5438H12.8438V15.5375H16.2812V12.5875C16.2812 9.16875 18.3688 7.30625 21.4188 7.30625C22.8813 7.30625 24.1375 7.4125 24.5 7.4625V11.0375H22.4C20.7437 11.0375 20.4188 11.825 20.4188 12.9812V15.5312H24.3875L23.8687 19.5375H20.4188V31.3813C27.1063 29.4625 32 23.3062 32 16Z" fill="#CBA071"/>
</g>
<defs>
<clipPath id="clip0_1_5661">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

              </a>
              <a href="#" target="_blank" aria-label="Twitter">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_5666)">
<path d="M16.5 19.8838C14.6312 19.8838 13.1162 18.3688 13.1162 16.5C13.1162 14.6312 14.6312 13.1162 16.5 13.1162C18.3688 13.1162 19.8838 14.6312 19.8838 16.5C19.8838 18.3688 18.3688 19.8838 16.5 19.8838Z" fill="#CBA071"/>
<path d="M16.5 0.386719C25.3991 0.386719 32.6133 7.60089 32.6133 16.5C32.6133 25.3991 25.3991 32.6133 16.5 32.6133C7.60089 32.6133 0.386719 25.3991 0.386719 16.5C0.386719 7.60089 7.60089 0.386719 16.5 0.386719ZM6.5447 20.5954C6.62204 22.1273 7.05253 23.6379 8.16892 24.7425C9.29614 25.8575 10.8139 26.273 12.3606 26.3495H20.6393C22.1862 26.273 23.7038 25.8578 24.831 24.7425C25.9475 23.6379 26.3779 22.1273 26.4552 20.5954V12.4046C26.3779 10.8727 25.9474 9.36207 24.831 8.25748C23.7038 7.14244 22.186 6.72697 20.6393 6.65047H12.3607C10.8138 6.72697 9.2962 7.14224 8.16898 8.25748C7.05253 9.36207 6.62211 10.8727 6.54476 12.4046L6.5447 20.5954Z" fill="#CBA071"/>
<path d="M12.4653 8.51682C14.4818 8.46152 18.5179 8.46152 20.5344 8.51682C21.5837 8.54563 22.7733 8.80686 23.521 9.60543C24.2979 10.4355 24.5915 11.4384 24.6213 12.5603C24.6736 14.5295 24.6213 20.4399 24.6213 20.4399C24.5872 21.5617 24.2979 22.5647 23.521 23.3948C22.7733 24.1936 21.5837 24.4546 20.5344 24.4834C18.5179 24.5387 14.4818 24.5387 12.4653 24.4834C11.416 24.4546 10.2264 24.1934 9.47872 23.3948C8.7018 22.5647 8.40822 21.5618 8.37844 20.4399V12.5603C8.40822 11.4384 8.7018 10.4355 9.47872 9.60543C10.2266 8.8066 11.4162 8.54563 12.4653 8.51682ZM16.5001 21.745C17.5375 21.745 18.5515 21.4374 19.414 20.8611C20.2765 20.2847 20.9488 19.4656 21.3457 18.5072C21.7427 17.5489 21.8466 16.4943 21.6442 15.4769C21.4418 14.4595 20.9423 13.5249 20.2088 12.7914C19.4753 12.0579 18.5407 11.5584 17.5233 11.356C16.5059 11.1536 15.4514 11.2575 14.493 11.6545C13.5346 12.0515 12.7155 12.7237 12.1392 13.5862C11.5628 14.4487 11.2552 15.4628 11.2552 16.5001C11.2552 17.8911 11.8078 19.2252 12.7914 20.2088C13.775 21.1924 15.1091 21.745 16.5001 21.745ZM11.2329 12.3379C11.4404 12.3378 11.6432 12.2762 11.8156 12.1609C11.9881 12.0457 12.1225 11.8818 12.2019 11.6901C12.2812 11.4984 12.302 11.2875 12.2615 11.0841C12.221 10.8806 12.121 10.6937 11.9743 10.5471C11.8276 10.4004 11.6407 10.3005 11.4372 10.26C11.2338 10.2196 11.0229 10.2404 10.8312 10.3198C10.6395 10.3992 10.4757 10.5336 10.3605 10.7061C10.2452 10.8786 10.1837 11.0814 10.1837 11.2889C10.1837 11.4267 10.2108 11.5631 10.2636 11.6904C10.3163 11.8177 10.3936 11.9333 10.491 12.0307C10.5885 12.1281 10.7041 12.2054 10.8314 12.2581C10.9587 12.3108 11.0952 12.3379 11.2329 12.3379Z" fill="#CBA071"/>
</g>
<defs>
<clipPath id="clip0_1_5666">
<rect width="33" height="33" fill="white" transform="matrix(-1 0 0 1 33 0)"/>
</clipPath>
</defs>
</svg>

              </a>
              <a href="#" target="_blank" aria-label="LinkedIn">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_5663)">
<path d="M14.0068 18.9976L19.2114 16L14.0068 13.0024V18.9976Z" fill="#CBA071"/>
<path d="M16 0C7.16479 0 0 7.16479 0 16C0 24.8352 7.16479 32 16 32C24.8352 32 32 24.8352 32 16C32 7.16479 24.8352 0 16 0ZM25.9976 16.0164C25.9976 16.0164 25.9976 19.2612 25.5859 20.8259C25.3552 21.6824 24.6799 22.3577 23.8235 22.5881C22.2588 23 16 23 16 23C16 23 9.75757 23 8.17651 22.5718C7.32007 22.3413 6.64478 21.6658 6.41406 20.8093C6.0022 19.2612 6.0022 16 6.0022 16C6.0022 16 6.0022 12.7554 6.41406 11.1907C6.64453 10.3342 7.33643 9.64233 8.17651 9.41187C9.74121 9 16 9 16 9C16 9 22.2588 9 23.8235 9.42822C24.6799 9.65869 25.3552 10.3342 25.5859 11.1907C26.0142 12.7554 25.9976 16.0164 25.9976 16.0164Z" fill="#CBA071"/>
</g>
<defs>
<clipPath id="clip0_1_5663">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

              </a>
              {/* <a href="#" target="_blank" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
              </a> */}
            </div>
            {/* <div class="newsletter">
              <h4>Subscribe to Our Newsletter</h4>
              <form>
                <input
                  type="email"
                  placeholder="Your Email"
                  aria-label="Email for newsletter"
                />
                <button type="submit">Subscribe</button>
              </form>
            </div> */}
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Your Professional Company. All rights reserved.</p>
          {/* <a href="#" class="back-to-top" aria-label="Back to top">
            <i class="fas fa-chevron-up"></i>
          </a> */}
        </div>
      </footer>
    </>
  );
}

export default Footer;
