import img from '../../images/not-found-img/Not-found.png';
import sprite from '../../images/svgs.svg';

export const imgNotFound = `<picture class="products__notFoundImage">
                <source
                  srcset="${img}"
                  media="(min-width: 1200px)"
                />
                <source
                  srcset="${img} "
                  media="(min-width: 768px)"
                />
                <img
                  class="our-team__img"
                  width="270"
                  srcset="
                    ${img}   1x,
                    ${img} 2x,
                    ${img}3x
                  "
                  src="${img}"
                  alt="cafe"
                />
              </picture>`;

export const svgHeart = `  <svg class="btn__svg" width="18" height="18"> <use href="${sprite}#heart"></use> </svg>`;
export const svgHeartFull = `  <svg class="btn__svg" width="18" height="18"> <use href="${sprite}#heart-full"></use> </svg>`;
