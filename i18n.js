(function () {
  var SUPPORTED_LANGS = ["en", "fr", "ar", "ur"];
  var RTL_LANGS = { ar: true, ur: true };
  var STORAGE_KEY = "rah_lang";
  var ORIGINAL_TEXT = new WeakMap();

  var TEXT_MAP = {
    "Shop": { fr: "Boutique", ar: "تسوق", ur: "خریداری" },
    "Story": { fr: "Histoire", ar: "القصة", ur: "کہانی" },
    "Collection": { fr: "Collection", ar: "التشكيلة", ur: "کلیکشن" },
    "Archive": { fr: "Archives", ar: "الأرشيف", ur: "آرکائیو" },
    "Profile": { fr: "Profil", ar: "الملف الشخصي", ur: "پروفائل" },
    "Official Profile": { fr: "Profil Officiel", ar: "الملف الرسمي", ur: "آفیشل پروفائل" },
    "View Collection": { fr: "Voir la Collection", ar: "عرض التشكيلة", ur: "کلیکشن دیکھیں" },
    "Featured": { fr: "À la Une", ar: "مميز", ur: "نمایاں" },
    "Minimal Modestwear": { fr: "Mode Pudique Minimaliste", ar: "أزياء محتشمة بسيطة", ur: "سادہ باوقار ملبوسات" },
    "A clean, neutral look inspired by the visual tone of your screenshot.": {
      fr: "Un style épuré et neutre inspiré du ton visuel de votre capture.",
      ar: "مظهر نظيف ومحايد مستوحى من الطابع البصري في لقطة الشاشة.",
      ur: "ایک سادہ اور نیوٹرل انداز جو آپ کے اسکرین شاٹ کے ویژول ٹون سے متاثر ہے۔"
    },
    "About RAH": { fr: "À Propos de RAH", ar: "عن RAH", ur: "RAH کے بارے میں" },
    "SIMPLE. MODEST. TIMELESS.": { fr: "SIMPLE. MODESTE. INTEMPOREL.", ar: "بسيط. محتشم. خالد.", ur: "سادہ۔ باوقار۔ لازوال۔" },
    "RAH blends modest silhouettes with a clean monochrome identity for a focused and modern storefront experience.": {
      fr: "RAH associe des silhouettes modestes à une identité monochrome épurée pour une vitrine moderne et claire.",
      ar: "تمزج RAH بين القصّات المحتشمة وهوية أحادية اللون لواجهة حديثة ومركزة.",
      ur: "RAH باوقار سلیوئٹس کو صاف مونوکروم شناخت کے ساتھ ملا کر جدید اور واضح اسٹور فرنٹ پیش کرتا ہے۔"
    },
    "Read Story": { fr: "Lire l’Histoire", ar: "اقرأ القصة", ur: "کہانی پڑھیں" },
    "Navigation": { fr: "Navigation", ar: "التنقل", ur: "نیویگیشن" },
    "Support": { fr: "Assistance", ar: "الدعم", ur: "مدد" },
    "Updates": { fr: "Mises à Jour", ar: "التحديثات", ur: "اپڈیٹس" },
    "Get launch notes and new arrivals.": {
      fr: "Recevez les notes de lancement et les nouveautés.",
      ar: "احصل على ملاحظات الإطلاق والوصولات الجديدة.",
      ur: "لانچ نوٹس اور نئی آمد کی معلومات حاصل کریں۔"
    },
    "Privacy": { fr: "Confidentialité", ar: "الخصوصية", ur: "رازداری" },
    "Terms": { fr: "Conditions", ar: "الشروط", ur: "شرائط" },
    "Delivery": { fr: "Livraison", ar: "التوصيل", ur: "ڈیلیوری" },
    "Wholesale": { fr: "Vente en Gros", ar: "البيع بالجملة", ur: "ہول سیل" },
    "Masterpiece Silhouettes": { fr: "Silhouettes Signature", ar: "تصاميم مميزة", ur: "شاندار سلیوئٹس" },
    "Request Private Viewing": { fr: "Demander une Visite Privée", ar: "طلب معاينة خاصة", ur: "پرائیویٹ ویوئنگ کی درخواست" },
    "Monochrome Silk Abaya": { fr: "Abaya en Soie Monochrome", ar: "عباية حرير أحادية اللون", ur: "مونوکروم سلک عبایا" },
    "Graphite Over-coat": { fr: "Manteau Graphite", ar: "معطف غرافيت", ur: "گریفائٹ اوور کوٹ" },
    "The Signature Abaya": { fr: "L’Abaya Signature", ar: "العباية المميزة", ur: "سگنیچر عبایا" },
    "RAH Collection": { fr: "Collection RAH", ar: "تشكيلة RAH", ur: "RAH کلیکشن" },
    "Select Size": { fr: "Choisir la Taille", ar: "اختر المقاس", ur: "سائز منتخب کریں" },
    "Size Guide": { fr: "Guide des Tailles", ar: "دليل المقاسات", ur: "سائز گائیڈ" },
    "Neutral Palette": { fr: "Palette Neutre", ar: "لوحة ألوان محايدة", ur: "نیوٹرل پیلیٹ" },
    "Add to Collection": { fr: "Ajouter à la Collection", ar: "أضف إلى التشكيلة", ur: "کلیکشن میں شامل کریں" },
    "Save to Wishlist": { fr: "Enregistrer dans la Liste", ar: "احفظ في المفضلة", ur: "وش لسٹ میں محفوظ کریں" },
    "Ethical Silk": { fr: "Soie Éthique", ar: "حرير أخلاقي", ur: "اخلاقی سلک" },
    "Bespoke Concierge": { fr: "Conciergerie Sur Mesure", ar: "خدمة مخصصة", ur: "بیسپوک کنسیئرج" },
    "Our Story": { fr: "Notre Histoire", ar: "قصتنا", ur: "ہماری کہانی" },
    "Explore the Collection": { fr: "Explorer la Collection", ar: "استكشف التشكيلة", ur: "کلیکشن دریافت کریں" },
    "The Ethics of Beauty": { fr: "L’Éthique de la Beauté", ar: "أخلاقيات الجمال", ur: "حسن کے اصول" },
    "Artisanal Integrity & Provenance": {
      fr: "Intégrité Artisanale & Provenance",
      ar: "نزاهة الحرفة والأصل",
      ur: "کاریگری کی صداقت اور اصل"
    },
    "The Archive": { fr: "Les Archives", ar: "الأرشيف", ur: "آرکائیو" },
    "The Minimal Cycle": { fr: "Le Cycle Minimal", ar: "الدورة البسيطة", ur: "سادہ دور" },
    "Botanical Alchemy": { fr: "Alchimie Botanique", ar: "كيمياء نباتية", ur: "بوٹینیکل الکیمی" },
    "Client Care": { fr: "Service Client", ar: "رعاية العملاء", ur: "کسٹمر کیئر" },
    "Privacy & Terms": { fr: "Confidentialité & Conditions", ar: "الخصوصية والشروط", ur: "رازداری اور شرائط" },
    "Shipping Destination": { fr: "Destination de Livraison", ar: "وجهة الشحن", ur: "شپنگ کا پتہ" },
    "Preferred Logistics": { fr: "Logistique Préférée", ar: "الخدمات اللوجستية المفضلة", ur: "ترجیحی لاجسٹکس" },
    "Step 01": { fr: "Étape 01", ar: "الخطوة 01", ur: "مرحلہ 01" },
    "Step 02": { fr: "Étape 02", ar: "الخطوة 02", ur: "مرحلہ 02" },
    "Full Name": { fr: "Nom Complet", ar: "الاسم الكامل", ur: "پورا نام" },
    "Delivery Address": { fr: "Adresse de Livraison", ar: "عنوان التوصيل", ur: "ڈیلیوری ایڈریس" },
    "Email Address": { fr: "Adresse E-mail", ar: "البريد الإلكتروني", ur: "ای میل ایڈریس" },
    "Phone Number": { fr: "Numéro de Téléphone", ar: "رقم الهاتف", ur: "فون نمبر" },
    "Standard Silk": { fr: "Standard", ar: "قياسي", ur: "اسٹینڈرڈ" },
    "3-5 Business Days": { fr: "3-5 Jours Ouvrés", ar: "3-5 أيام عمل", ur: "3-5 کاروباری دن" },
    "Priority": { fr: "Priorité", ar: "أولوية", ur: "ترجیحی" },
    "Next Day Delivery": { fr: "Livraison le Lendemain", ar: "توصيل في اليوم التالي", ur: "اگلے دن ڈیلیوری" },
    "Return to Cart": { fr: "Retour au Panier", ar: "العودة إلى السلة", ur: "کارٹ پر واپس جائیں" },
    "Order Portfolio": { fr: "Portefeuille de Commande", ar: "محفظة الطلب", ur: "آرڈر پورٹ فولیو" },
    "Subtotal": { fr: "Sous-total", ar: "المجموع الفرعي", ur: "سب ٹوٹل" },
    "Logistics": { fr: "Logistique", ar: "الخدمات اللوجستية", ur: "لاجسٹکس" },
    "Value Added Tax": { fr: "Taxe sur la Valeur Ajoutée", ar: "ضريبة القيمة المضافة", ur: "ویلیو ایڈڈ ٹیکس" },
    "Total Portfolio": { fr: "Total du Portefeuille", ar: "إجمالي الطلب", ur: "کل پورٹ فولیو" },
    "Confirm Purchase": { fr: "Confirmer l’Achat", ar: "تأكيد الشراء", ur: "خرید کی تصدیق کریں" },
    "Personal Archive": { fr: "Archives Personnelles", ar: "الأرشيف الشخصي", ur: "ذاتی آرکائیو" },
    "Acquisitions": { fr: "Acquisitions", ar: "المقتنيات", ur: "خریداری" },
    "Total Orders": { fr: "Total des Commandes", ar: "إجمالي الطلبات", ur: "کل آرڈرز" },
    "All Archives": { fr: "Toutes les Archives", ar: "كل الأرشيف", ur: "تمام آرکائیو" },
    "In Processing": { fr: "En Traitement", ar: "قيد المعالجة", ur: "پروسیسنگ میں" },
    "In Transit": { fr: "En Transit", ar: "قيد الشحن", ur: "ٹرانزٹ میں" },
    "Delivered": { fr: "Livré", ar: "تم التوصيل", ur: "ڈیلیورڈ" },
    "Acquisition Value": { fr: "Valeur d’Achat", ar: "قيمة الشراء", ur: "خریداری کی قیمت" },
    "Language": { fr: "Langue", ar: "اللغة", ur: "زبان" }
  };

  var TITLE_MAP = {
    "RAH | Home": { fr: "RAH | Accueil", ar: "RAH | الرئيسية", ur: "RAH | ہوم" },
    "RAH | Story": { fr: "RAH | Histoire", ar: "RAH | القصة", ur: "RAH | کہانی" },
    "RAH | Product": { fr: "RAH | Produit", ar: "RAH | المنتج", ur: "RAH | پروڈکٹ" },
    "RAH | Checkout": { fr: "RAH | الدفع", ar: "RAH | إتمام الشراء", ur: "RAH | چیک آؤٹ" },
    "RAH | Orders": { fr: "RAH | Commandes", ar: "RAH | الطلبات", ur: "RAH | آرڈرز" }
  };

  var PLACEHOLDER_MAP = {
    "atelier@residence.com": { fr: "atelier@residence.com", ar: "atelier@residence.com", ur: "atelier@residence.com" },
    "Search by Order ID or Collection name...": {
      fr: "Rechercher par ID de commande ou nom de collection...",
      ar: "ابحث برقم الطلب أو اسم التشكيلة...",
      ur: "آرڈر آئی ڈی یا کلیکشن نام سے تلاش کریں..."
    },
    "Sarah Mitchell": { fr: "Sarah Mitchell", ar: "سارة ميتشل", ur: "سارہ مچل" },
    "124 Editorial Avenue, Suite 400": {
      fr: "124 Avenue Éditoriale, Suite 400",
      ar: "124 شارع إديتوريال، جناح 400",
      ur: "124 ایڈیٹوریل ایونیو، سویٹ 400"
    },
    "sarah@ethereal.com": { fr: "sarah@rah.com", ar: "sarah@rah.com", ur: "sarah@rah.com" },
    "+1 (555) 000-0000": { fr: "+33 6 00 00 00 00", ar: "+971 50 000 0000", ur: "+92 300 0000000" }
  };

  function normalize(value) {
    return String(value || "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function translateValue(raw, lang, map) {
    if (!raw || lang === "en") return raw;
    var key = normalize(raw);
    var entry = map[key];
    if (!entry) return raw;
    return entry[lang] || raw;
  }

  function translateTextNode(node, lang) {
    if (!ORIGINAL_TEXT.has(node)) ORIGINAL_TEXT.set(node, node.nodeValue);
    var original = ORIGINAL_TEXT.get(node);
    if (lang === "en") {
      node.nodeValue = original;
      return;
    }
    var match = original.match(/^(\s*)([\s\S]*?)(\s*)$/);
    var leading = match ? match[1] : "";
    var core = match ? match[2] : original;
    var trailing = match ? match[3] : "";
    var translated = translateValue(core, lang, TEXT_MAP);
    node.nodeValue = leading + translated + trailing;
  }

  function walkTextNodes(root, callback) {
    if (!root) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node || !node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        var tag = parent.tagName;
        if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT" || tag === "OPTION" || tag === "TEXTAREA") {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    var current = walker.nextNode();
    while (current) {
      callback(current);
      current = walker.nextNode();
    }
  }

  function applyAttributeTranslations(lang) {
    var placeholders = document.querySelectorAll("[placeholder]");
    placeholders.forEach(function (input) {
      if (!input.dataset.i18nOriginalPlaceholder) {
        input.dataset.i18nOriginalPlaceholder = input.getAttribute("placeholder") || "";
      }
      var original = input.dataset.i18nOriginalPlaceholder;
      var translated = translateValue(original, lang, PLACEHOLDER_MAP);
      input.setAttribute("placeholder", translated);
    });
  }

  function applyTitleTranslation(lang) {
    if (!document.documentElement.dataset.i18nOriginalTitle) {
      document.documentElement.dataset.i18nOriginalTitle = document.title;
    }
    var original = document.documentElement.dataset.i18nOriginalTitle;
    if (lang === "en") {
      document.title = original;
      return;
    }
    var translated = translateValue(original, lang, TITLE_MAP);
    document.title = translated;
  }

  function setLanguageDirection(lang) {
    var isRtl = !!RTL_LANGS[lang];
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
    document.body.classList.toggle("rah-rtl", isRtl);
  }

  function getStoredLanguage() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED_LANGS.indexOf(saved) !== -1) return saved;
    } catch (error) {
      return "en";
    }
    return "en";
  }

  function storeLanguage(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      return;
    }
  }

  function applyLanguage(lang) {
    if (SUPPORTED_LANGS.indexOf(lang) === -1) lang = "en";
    setLanguageDirection(lang);
    walkTextNodes(document.body, function (node) {
      translateTextNode(node, lang);
    });
    applyAttributeTranslations(lang);
    applyTitleTranslation(lang);
    var select = document.getElementById("rah-lang-select");
    if (select && select.value !== lang) select.value = lang;
    storeLanguage(lang);
  }

  function injectLanguageStyles() {
    if (document.getElementById("rah-i18n-style")) return;
    var style = document.createElement("style");
    style.id = "rah-i18n-style";
    style.textContent =
      "#rah-lang-widget{" +
      "position:fixed;right:max(12px,env(safe-area-inset-right));bottom:max(12px,env(safe-area-inset-bottom));" +
      "z-index:9999;background:rgba(255,255,255,0.95);border:1px solid #d1d5db;border-radius:12px;" +
      "box-shadow:0 8px 22px rgba(17,24,39,.14);padding:8px 10px;display:flex;align-items:center;gap:8px;" +
      "font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','Segoe UI',sans-serif;}" +
      "#rah-lang-label{font-size:12px;color:#374151;font-weight:600;}" +
      "#rah-lang-select{font-size:13px;color:#111827;border:none;background:transparent;outline:none;min-width:90px;}" +
      ".rah-rtl #rah-lang-widget{left:max(12px,env(safe-area-inset-left));right:auto;}" +
      "@media (max-width:640px){#rah-lang-widget{padding:7px 9px;}#rah-lang-label{display:none;}#rah-lang-select{font-size:12px;min-width:76px;}}";
    document.head.appendChild(style);
  }

  function createLanguageWidget() {
    if (document.getElementById("rah-lang-widget")) return;
    injectLanguageStyles();

    var widget = document.createElement("div");
    widget.id = "rah-lang-widget";

    var label = document.createElement("span");
    label.id = "rah-lang-label";
    label.textContent = "Language";

    var select = document.createElement("select");
    select.id = "rah-lang-select";
    select.setAttribute("aria-label", "Language");

    var options = [
      { value: "en", label: "English" },
      { value: "fr", label: "Français" },
      { value: "ar", label: "العربية" },
      { value: "ur", label: "اردو" }
    ];

    options.forEach(function (optionData) {
      var option = document.createElement("option");
      option.value = optionData.value;
      option.textContent = optionData.label;
      select.appendChild(option);
    });

    select.addEventListener("change", function (event) {
      applyLanguage(event.target.value);
    });

    widget.appendChild(label);
    widget.appendChild(select);
    document.body.appendChild(widget);
  }

  document.addEventListener("DOMContentLoaded", function () {
    createLanguageWidget();
    applyLanguage(getStoredLanguage());
  });
})();
