import img from '../../images/not-found-img/Not-found.png';

export const imgNotFound = `<picture>
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
