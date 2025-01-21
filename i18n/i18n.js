
  // Function to update the language
  function updateLanguage(lang) {
    // Get all elements with the `i18n` attribute
    const elements = document.querySelectorAll("[i18n]");
  
    // Loop through each element and update its text content
    elements.forEach((element) => {
      const key = element.getAttribute("i18n"); // Get the translation key
      const text = translations[lang].dealsSection[key.split(".")[1]][key.split(".")[2]]; // Get the translated text
      element.textContent = text; // Update the element's text content
    });
  
    // Update the `lang` attribute of the HTML element
    document.documentElement.setAttribute("lang", lang);
  
    // Update the direction of the page for RTL languages
    if (lang === "fa") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }
  
  // Event listener for language switcher buttons
  document.getElementById("lang-en").addEventListener("click", () => updateLanguage("en"));
  document.getElementById("lang-fa").addEventListener("click", () => updateLanguage("fa"));
  
  // Initialize with the default language (English)
  updateLanguage("en");

function applyTranslations(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
  
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        if (element.tagName === "IMG") {
          // Handle alt and title attributes for images
          const altKey = element.getAttribute("data-i18n-alt");
          const titleKey = element.getAttribute("data-i18n-title");
          if (altKey) element.alt = translations[lang][altKey];
          if (titleKey) element.title = translations[lang][titleKey];
        } else {
          // Handle text content for other elements
          element.textContent = translations[lang][key];
        }
      }
    });
  }
  
  applyTranslations("fa");