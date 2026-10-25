
// (() => {
//     const script = document.currentScript;

//     if (!script || script.dataset.brandWidgetInitialized === "true") {
//         return;
//     }

//     script.dataset.brandWidgetInitialized = "true";

//     const destination = script.dataset.url || "https://www.pmfurnitureassembly.com";
//     const title =
//         script.dataset.title || "PM Furniture Assembly";
//     const description =
//         script.dataset.description ||
//         "Looking for professional installation help? Our team can help you get your new product assembled and installed.";
//     const ctaLabel = script.dataset.label || "Book Installation";
//     const logoUrl = script.dataset.logo || "";

//     // Validate the destination URL.
//     let destinationUrl;

//     try {
//         destinationUrl = new URL(destination);

//         if (!["https:", "http:"].includes(destinationUrl.protocol)) {
//             return;
//         }
//     } catch {
//         console.error(
//             "[Brand Widget] Please provide a valid destination URL."
//         );
//         return;
//     }

//     // Insert the widget exactly where the script is placed.
//     const host = document.createElement("div");
//     host.className = "pm-brand-widget";
//     host.style.cssText = "display:block;width:100%;max-width:100%;";

//     script.insertAdjacentElement("beforebegin", host);

//     // Keep widget styles isolated from the host website.
//     const shadow = host.attachShadow({ mode: "open" });

//     const style = document.createElement("style");

//     style.textContent = `
//       :host {
//         display: block;
//         width: 100%;
//         max-width: 100%;
//         font-family: Arial, Helvetica, sans-serif;
//         color: #202124;
//         box-sizing: border-box;
//       }

//       *, *::before, *::after {
//         box-sizing: border-box;
//       }

//       .card {
//         display: flex;
//         align-items: center;
//         gap: 14px;
//         width: 100%;
//         min-width: 0;
//         padding: 14px;
//         border: 1px solid #bcc2cb;
//         border-radius: 12px;
//         background: #fff;
//         color: inherit;
//         text-decoration: none;
//         cursor: pointer;
//         transition: border-color 160ms ease,
//                     box-shadow 160ms ease;
//       }

//       .card:hover {
//         border-color: #8f98a5;
//         box-shadow: 0 3px 12px rgba(24, 39, 58, 0.08);
//       }

//       .card:focus-visible {
//         outline: 3px solid #2765c7;
//         outline-offset: 3px;
//       }

//       .logo {
//         display: flex;
//         flex: 0 0 64px;
//         align-items: center;
//         justify-content: center;
//         width: 64px;
//         height: 64px;
//         overflow: hidden;
//         border-radius: 8px;
//         background: #292d32;
//         color: #00a6dc;
//         font-size: 19px;
//         font-weight: 700;
//         line-height: 1;
//       }

//       .logo img {
//         display: block;
//         width: 100%;
//         height: 100%;
//         object-fit: contain;
//       }

//       .copy {
//         display: flex;
//         flex: 1 1 auto;
//         flex-direction: column;
//         align-items: flex-start;
//         min-width: 0;
//         gap: 5px;
//       }

//       .title {
//         display: block;
//         max-width: 100%;
//         color: #17191d;
//         font-size: 15px;
//         font-weight: 700;
//         line-height: 1.35;
//         overflow-wrap: anywhere;
//       }

//       .description {
//         display: block;
//         max-width: 100%;
//         color: #526b91;
//         font-size: 12px;
//         font-weight: 400;
//         line-height: 1.5;
//         overflow-wrap: anywhere;
//       }

//       .cta {
//         display: inline-flex;
//         align-items: center;
//         gap: 6px;
//         margin-top: 7px;
//         color: #174eaa;
//         font-size: 12px;
//         font-weight: 600;
//         line-height: 1.4;
//       }

//       .arrow {
//         display: inline-block;
//         font-size: 13px;
//         line-height: 1;
//       }

//       @media (max-width: 420px) {
//         .card {
//           gap: 10px;
//           padding: 11px;
//           border-radius: 10px;
//         }

//         .logo {
//           flex-basis: 54px;
//           width: 54px;
//           height: 54px;
//           font-size: 16px;
//         }

//         .title {
//           font-size: 14px;
//         }

//         .description {
//           font-size: 12px;
//         }
//       }

//       @media (prefers-reduced-motion: reduce) {
//         .card {
//           transition: none;
//         }
//       }
//     `;

//     const link = document.createElement("a");

//     link.className = "card";
//     link.href = destinationUrl.href;
//     link.target = "_blank";
//     link.rel = "noopener noreferrer";
//     link.setAttribute(
//         "aria-label",
//         `${title} — ${ctaLabel}`
//     );

//     const logo = document.createElement("span");
//     logo.className = "logo";
//     logo.setAttribute("aria-hidden", "true");

//     if (logoUrl) {
//         try {
//             const parsedLogoUrl = new URL(logoUrl);

//             if (["https:", "http:"].includes(parsedLogoUrl.protocol)) {
//                 const image = document.createElement("img");
//                 image.src = parsedLogoUrl.href;
//                 image.alt = "";
//                 image.loading = "lazy";

//                 image.addEventListener(
//                     "error",
//                     () => {
//                         image.remove();
//                         logo.textContent = "PM";
//                     },
//                     { once: true }
//                 );

//                 logo.appendChild(image);
//             }
//         } catch {
//             // Use the PM monogram if the logo URL is invalid.
//         }
//     }

//     if (!logo.hasChildNodes()) {
//         logo.textContent = "PM";
//     }

//     const copy = document.createElement("span");
//     copy.className = "copy";

//     const heading = document.createElement("span");
//     heading.className = "title";
//     heading.textContent = title;

//     const summary = document.createElement("span");
//     summary.className = "description";
//     summary.textContent = description;

//     const cta = document.createElement("span");
//     cta.className = "cta";
//     cta.append(document.createTextNode(ctaLabel));

//     const arrow = document.createElement("span");
//     arrow.className = "arrow";
//     arrow.setAttribute("aria-hidden", "true");
//     arrow.textContent = "↗";

//     cta.appendChild(arrow);
//     copy.append(heading, summary, cta);
//     link.append(logo, copy);
//     shadow.append(style, link);
// })();

(() => {
    const script = document.currentScript;

    if (!script || script.dataset.brandWidgetInitialized === "true") {
        return;
    }

    script.dataset.brandWidgetInitialized = "true";

    const destination =
        script.dataset.url || "https://www.pmfurnitureassembly.com";
    const title = script.dataset.title || "PM Furniture Assembly";
    const description =
        script.dataset.description ||
        "Looking for professional installation help? Our team can help you get your new product assembled and installed.";
    const ctaLabel = script.dataset.label || "Book Installation";
    const logoUrl = script.dataset.logo || "";
    const variant = (script.dataset.variant || "classic").toLowerCase();

    let destinationUrl;

    try {
        destinationUrl = new URL(destination);
        if (!["https:", "http:"].includes(destinationUrl.protocol)) return;
    } catch {
        console.error(
            "[Brand Widget] Please provide a valid destination URL."
        );
        return;
    }

    // Insert the widget where the script is placed.
    const host = document.createElement("div");
    host.className = "pm-brand-widget";
    host.style.cssText = "display:block;width:100%;max-width:100%;";
    script.insertAdjacentElement("beforebegin", host);

    // Isolate widget styles from the host website.
    const shadow = host.attachShadow({ mode: "open" });
    const style = document.createElement("style");

    style.textContent = `
      :host {
        display: block;
        width: 100%;
        max-width: 100%;
        font-family: Arial, Helvetica, sans-serif;
        color: #202124;
        box-sizing: border-box;
      }
  
      *, *::before, *::after {
        box-sizing: border-box;
      }
  
      .card {
        display: flex;
        align-items: center;
        gap: 14px;
        width: 100%;
        min-width: 0;
        padding: 14px;
        border: 1px solid #bcc2cb;
        border-radius: 12px;
        background: #ffffff;
        color: inherit;
        text-decoration: none;
        cursor: pointer;
        transition:
          background-color 160ms ease,
          border-color 160ms ease,
          box-shadow 160ms ease;
      }
  
      .card:hover {
        border-color: #8f98a5;
        box-shadow: 0 3px 12px rgba(24, 39, 58, 0.08);
      }
  
      .card:focus-visible {
        outline: 3px solid #2765c7;
        outline-offset: 3px;
      }
  
      .logo {
        display: flex;
        flex: 0 0 64px;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        overflow: hidden;
        border-radius: 8px;
        background: #292d32;
        color: #00a6dc;
        font-size: 19px;
        font-weight: 700;
        line-height: 1;
      }
  
      .logo img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
  
      .copy {
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        align-items: flex-start;
        min-width: 0;
        gap: 5px;
      }
  
      .title {
        display: block;
        max-width: 100%;
        color: #17191d;
        font-size: 15px;
        font-weight: 700;
        line-height: 1.35;
        overflow-wrap: anywhere;
      }
  
      .description {
        display: block;
        max-width: 100%;
        color: #526b91;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.5;
        overflow-wrap: anywhere;
      }
  
      .cta {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-top: 7px;
        color: #174eaa;
        font-size: 12px;
        font-weight: 600;
        line-height: 1.4;
      }
  
      .arrow {
        display: inline-block;
        font-size: 13px;
        line-height: 1;
      }
  
      /* Variant 1: Classic white */
      .card[data-variant="classic"] {
        background: #ffffff;
        border-color: #bcc2cb;
      }
  
      /* Variant 2: Soft blue */
      .card[data-variant="blue"] {
        background: #cfe1ff;
        border-color: #b6c8e2;
      }
  
      .card[data-variant="blue"]:hover {
        background: #c2d8fc;
      }
  
      /* Variant 3: Pale blue */
      .card[data-variant="pale-blue"] {
        background: #edf7fc;
        border-color: #bccbd3;
      }
  
      .card[data-variant="pale-blue"]:hover {
        background: #e2f1f8;
      }
  
      /* Variant 4: Warm neutral */
      .card[data-variant="warm"] {
        background: #f0ece8;
        border-color: #c9c1ba;
      }
  
      .card[data-variant="warm"]:hover {
        background: #e8e2dc;
      }
  
      /* Variant 5: Light indigo */
      .card[data-variant="indigo"] {
        background: #e6efff;
        border-color: #bccbe4;
      }
  
      .card[data-variant="indigo"]:hover {
        background: #dce8fc;
      }
  
      /* Variant 6: Cool gray */
      .card[data-variant="gray"] {
        background: #f0f0f3;
        border-color: #c7c8ce;
      }
  
      .card[data-variant="gray"]:hover {
        background: #e7e7ec;
      }
  
      @media (max-width: 420px) {
        .card {
          gap: 10px;
          padding: 11px;
          border-radius: 10px;
        }
  
        .logo {
          flex-basis: 54px;
          width: 54px;
          height: 54px;
          font-size: 16px;
        }
  
        .title {
          font-size: 14px;
        }
  
        .description {
          font-size: 12px;
        }
      }
  
      @media (prefers-reduced-motion: reduce) {
        .card {
          transition: none;
        }
      }
    `;

    // Create the clickable card.
    const link = document.createElement("a");
    link.className = "card";

    const allowedVariants = [
        "classic",
        "blue",
        "pale-blue",
        "warm",
        "indigo",
        "gray"
    ];

    link.dataset.variant = allowedVariants.includes(variant)
        ? variant
        : "classic";

    link.href = destinationUrl.href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", `${title} — ${ctaLabel}`);

    // Create the logo.
    const logo = document.createElement("span");
    logo.className = "logo";
    logo.setAttribute("aria-hidden", "true");

    if (logoUrl) {
        try {
            const parsedLogoUrl = new URL(logoUrl);

            if (["https:", "http:"].includes(parsedLogoUrl.protocol)) {
                const image = document.createElement("img");
                image.src = parsedLogoUrl.href;
                image.alt = "";
                image.loading = "lazy";
                image.referrerPolicy = "no-referrer";

                image.addEventListener(
                    "error",
                    () => {
                        image.remove();
                        logo.textContent = "PM";
                    },
                    { once: true }
                );

                logo.appendChild(image);
            }
        } catch {
            // Use the PM monogram if the logo URL is invalid.
        }
    }

    if (!logo.hasChildNodes()) {
        logo.textContent = "PM";
    }

    // Create the text content.
    const copy = document.createElement("span");
    copy.className = "copy";

    const heading = document.createElement("span");
    heading.className = "title";
    heading.textContent = title;

    const summary = document.createElement("span");
    summary.className = "description";
    summary.textContent = description;

    const cta = document.createElement("span");
    cta.className = "cta";
    cta.append(document.createTextNode(ctaLabel));

    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "↗";

    cta.appendChild(arrow);
    copy.append(heading, summary, cta);
    link.append(logo, copy);

    shadow.append(style, link);
})();
