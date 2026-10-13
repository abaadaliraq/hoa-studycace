const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll("[data-image-fallback]").forEach((image) => {
  image.addEventListener(
    "error",
    () => {
      image.closest("figure")?.classList.add("is-missing-image");
    },
    { once: true }
  );
});

const investmentItems = [
  {
    item: "مولدة كهربائية وتجهيزاتها",
    category: "أصول وتجهيزات",
    amount: 15000,
    purpose: "توفير مصدر طاقة احتياطي يضمن استمرارية أعمال المطبخ والاستقبال والفعاليات."
  },
  {
    item: "منظومة التبريد والتكييف",
    category: "أصول وتجهيزات",
    amount: 12000,
    purpose: "استكمال متطلبات التبريد المناسبة للمساحات الداخلية وأماكن استقبال الضيوف."
  },
  {
    item: "تجهيز المطبخ ومعداته",
    category: "أصول وتجهيزات",
    amount: 22000,
    purpose: "توفير معدات الطهي والتحضير والحفظ والتبريد اللازمة لإنتاج الوجبات وخدمات الضيافة."
  },
  {
    item: "الساحبات والتهوية وتجهيزاتها",
    category: "أصول وتجهيزات",
    amount: 9000,
    purpose: "استكمال أنظمة سحب الأبخرة والتهوية وربطها بالمرافق الفنية للمطبخ."
  },
  {
    item: "صيانة وتأهيل أثاث الاجتماعات والاستقبال",
    category: "أصول وتجهيزات",
    amount: 6000,
    purpose: "صيانة وإعادة تأهيل الأثاث الموجود في بيت التحفيات، بما يشمل التنجيد والتنظيف والإصلاح وإعادة التوزيع بما يتناسب مع الاستقبالات الرسمية والاجتماعات والفعاليات الخاصة، مع شراء قطع مكملة عند الحاجة."
  },
  {
    item: "تأثيث الحديقة والإنارة الخارجية",
    category: "أصول وتجهيزات",
    amount: 18000,
    purpose: "تجهيز الحديقة لاستضافة المناسبات والاستقبالات، بما يشمل الأثاث والإنارة والتجهيزات المكملة."
  },
  {
    item: "أدوات الضيافة والتقديم",
    category: "أصول وتجهيزات",
    amount: 7000,
    purpose: "توفير أدوات المائدة والتقديم ومستلزمات الخدمة المناسبة للمناسبات الرسمية."
  },
  {
    item: "نظام محاسبي وإدارة متكاملة للفعاليات",
    category: "أصول وتجهيزات",
    amount: 13000,
    purpose: "موازنة تقديرية لتطوير أو تخصيص منظومة موحدة لإدارة الجهات والحجوزات والعروض والعقود والفواتير والمحاسبة وميزانيات الفعاليات والمشتريات وقوائم الطعام ومهام العاملين والتقارير ولوحة التحكم والصلاحيات والنسخ الاحتياطي، مع تحديد تكلفة الأجهزة والتكامل الأمني ضمن نطاق التنفيذ النهائي."
  },
  {
    item: "زي رسمي فاخر لطاقم الخدمة والاستقبال",
    category: "أصول وتجهيزات",
    amount: 3000,
    purpose: "تصميم وتجهيز زي رسمي موحد وعالي الجودة لطاقم الاستقبال والخدمة، مستوحى من أناقة الضيافة البغدادية التقليدية بأسلوب معاصر، ويشمل الملابس والأحذية والإكسسوارات المهنية اللازمة وفق العدد المعتمد للعاملين."
  },
  {
    item: "تجهيز المخزن وسكن العاملين والدفعات الأولية",
    category: "مصاريف تأسيس",
    amount: 5000,
    purpose: "تهيئة مرافق تخزين المواد والمعدات، وتأمين الاحتياجات والدفعات الأولية لسكن العاملين."
  },
  {
    item: "التسويق والعلاقات المؤسسية",
    category: "مصاريف تأسيس",
    amount: 5000,
    purpose: "إعداد الملف التعريفي والعروض المؤسسية والمحتوى البصري والتواصل المهني مع الجهات المستهدفة."
  },
  {
    item: "متطلبات السلامة والتراخيص والتهيئة",
    category: "مصاريف تأسيس",
    amount: 5000,
    purpose: "تغطية المتطلبات الأولية للسلامة والتهيئة والإجراءات اللازمة بحسب الاشتراطات المعمول بها."
  },
  {
    item: "الاحتياطي التشغيلي",
    category: "احتياطي نقدي",
    amount: 30000,
    purpose: "توفير سيولة لتغطية الالتزامات والمصاريف خلال مرحلة الانطلاق والتعامل مع الاحتياجات التشغيلية غير المتوقعة."
  }
];

const formatMoney = (value) => `${new Intl.NumberFormat("en-US").format(value)}$`;
const formatPercent = (value) => {
  const rounded = Math.round(value * 100) / 100;
  return `${rounded.toLocaleString("en-US", { maximumFractionDigits: 2 })}%`;
};

const operatingStaff = [
  {
    role: "مدير التشغيل والعلاقات المؤسسية",
    count: 1,
    salary: 1200,
    responsibilities: "إدارة التشغيل والحجوزات والعلاقات مع السفارات والمؤسسات، والتنسيق مع الجهات المتعاقدة والإشراف على تنفيذ الفعاليات."
  },
  {
    role: "الشيف الرئيسي",
    count: 1,
    salary: 1500,
    responsibilities: "إعداد قوائم الطعام والإشراف على جودة المطبخ، وتخطيط الوجبات الخاصة بالفعاليات الرسمية والمناسبات."
  },
  {
    role: "مساعد الشيف",
    count: 1,
    salary: 600,
    responsibilities: "المساعدة في التحضير والطهي وتجهيز الطلبات ومراقبة المواد الغذائية والمخزون."
  },
  {
    role: "مسؤول الاستقبال والخدمة",
    count: 1,
    salary: 650,
    responsibilities: "إدارة ترتيبات الاستقبال وتوزيع مهام فريق الخدمة ومتابعة جودة تقديم الضيافة."
  },
  {
    role: "موظفو الخدمة والضيافة",
    count: 2,
    salary: 450,
    responsibilities: "تقديم الطعام والمشروبات وتجهيز الطاولات وخدمة الضيوف أثناء الاستقبالات والمناسبات."
  },
  {
    role: "عامل تنظيف ومساندة المطبخ",
    count: 1,
    salary: 450,
    responsibilities: "المحافظة على نظافة مرافق الخدمة والمطبخ، والمساعدة في التحضير والتنظيف بعد الفعاليات."
  }
];

const monthlyOperatingExpenses = [
  {
    item: "سكن العاملين",
    amount: 500,
    description: "تغطية الكلفة الشهرية التقديرية لسكن العاملين الأساسيين وفق احتياجات التشغيل."
  },
  {
    item: "الكهرباء والمولدة والوقود",
    amount: 650,
    description: "تغطية تكاليف الطاقة اللازمة للحفاظ على جاهزية الموقع والمطبخ والمرافق التشغيلية."
  },
  {
    item: "الماء والإنترنت والخدمات",
    amount: 200,
    description: "تغطية خدمات الماء والاتصالات والإنترنت والمرافق الأساسية."
  },
  {
    item: "خدمات الحماية والأمن",
    amount: 450,
    description: "تكلفة تقديرية لخدمات الحماية والأمن الأساسية، مع تحديد المتطلبات الإضافية لكل فعالية بصورة مستقلة."
  },
  {
    item: "خدمات المحاسبة الخارجية",
    amount: 250,
    description: "تكلفة خدمات المراجعة والمتابعة المحاسبية الدورية وإعداد التقارير المالية."
  },
  {
    item: "الصيانة الدورية",
    amount: 300,
    description: "تغطية أعمال الصيانة الاعتيادية للموقع والمعدات والتجهيزات التشغيلية."
  },
  {
    item: "التسويق والعلاقات المؤسسية",
    amount: 500,
    description: "الإنفاق الشهري المستمر على التواصل المهني والعلاقات المؤسسية والتسويق الموجه للسفارات والجهات المستهدفة."
  },
  {
    item: "استضافة النظام الإلكتروني والاشتراكات",
    amount: 100,
    description: "تغطية الاستضافة والخدمات التقنية والاشتراكات اللازمة لاستمرارية عمل النظام المحاسبي ونظام إدارة الحجوزات والفعاليات."
  },
  {
    item: "مستلزمات النظافة والاستهلاك",
    amount: 200,
    description: "تغطية المستلزمات التشغيلية الأساسية اللازمة للمحافظة على نظافة الموقع وجاهزيته."
  }
];

const eventTypes = [
  {
    id: "visit_lunch",
    name: "زيارة خاصة مع غداء",
    guestCount: 20,
    guestRange: "20 ضيفاً",
    price: 3000,
    foodCost: 250,
    extraWorkers: 0,
    workerCost: 50,
    setupCost: 0,
    otherDirectCost: 0,
    description: "استضافة خاصة محدودة العدد تستفيد من جاهزية المكان والمطبخ والفريق الدائم، وتناسب الزيارات الرسمية أو اجتماعات الغداء الخاصة.",
    note: "هذه فئة مرجعية للحد الأدنى للحجز، وليست متوسط سعر جميع الحجوزات."
  },
  {
    id: "corporate_event",
    name: "اجتماع أو فعالية مؤسسية",
    guestCount: 30,
    guestRange: "30 ضيفاً",
    price: 4500,
    foodCost: 450,
    extraWorkers: 1,
    workerCost: 50,
    setupCost: 50,
    otherDirectCost: 0,
    description: "فعالية مؤسسية أو اجتماع شركاء ضمن بيئة تراثية خاصة، مع ضيافة منظمة وتجهيزات تشغيلية أساسية.",
    note: "تتغير القيمة النهائية بحسب مستوى الضيافة ومتطلبات الاجتماع."
  },
  {
    id: "formal_reception",
    name: "استقبال رسمي أو دبلوماسي",
    guestCount: 45,
    guestRange: "45 ضيفاً",
    price: 6500,
    foodCost: 675,
    extraWorkers: 2,
    workerCost: 50,
    setupCost: 75,
    otherDirectCost: 0,
    description: "استقبال رسمي أو دبلوماسي يتطلب مستوى أعلى من التنظيم والضيافة وتنسيق الحركة داخل البيت والحديقة.",
    note: "لا تشمل هذه الفئة تجهيزات ترجمة أو مؤتمرات استثنائية من موردين خارجيين."
  },
  {
    id: "large_event",
    name: "فعالية موسعة أو استقبال كبير",
    guestCount: 60,
    guestRange: "60 ضيفاً",
    price: 8000,
    foodCost: 900,
    extraWorkers: 2,
    workerCost: 50,
    setupCost: 100,
    otherDirectCost: 0,
    description: "فعالية واسعة النطاق تستثمر كامل قيمة المكان التراثي وقدرته على استقبال ضيوف أكثر ضمن ترتيبات ضيافة وتنظيم أكبر.",
    note: "يمكن أن تتجاوز قيمة الحجز 8,000 دولار عند إضافة تجهيزات تقنية أو خدمات خاصة."
  }
];

const revenueScenarios = {
  conservative: {
    label: "متحفظ",
    bookings: [
      { eventId: "visit_lunch", count: 1 },
      { eventId: "corporate_event", count: 1 },
      { eventId: "formal_reception", count: 1 },
      { eventId: "large_event", count: 0 }
    ],
    evaluation: "يعكس هذا السيناريو نشاطاً محدوداً بثلاث فعاليات شهرية بمزيج متوازن، ويظهر قدرة التسعير على تغطية المصاريف الثابتة دون افتراض حجوزات مؤكدة."
  },
  base: {
    label: "أساسي",
    bookings: [
      { eventId: "visit_lunch", count: 1 },
      { eventId: "corporate_event", count: 2 },
      { eventId: "formal_reception", count: 1 },
      { eventId: "large_event", count: 1 }
    ],
    evaluation: "يمثل السيناريو الأساسي مستوى نشاط تشغيلي بخمس فعاليات شهرية، مع متوسط حجز أعلى من الحد الأدنى نتيجة اختلاف طبيعة الفعاليات."
  },
  optimistic: {
    label: "متفائل",
    bookings: [
      { eventId: "visit_lunch", count: 1 },
      { eventId: "corporate_event", count: 3 },
      { eventId: "formal_reception", count: 2 },
      { eventId: "large_event", count: 2 }
    ],
    evaluation: "يفترض هذا السيناريو انتظام التعاقدات والحجوزات إلى ثماني فعاليات شهرية، مع حضور أكبر للفعاليات الرسمية والموسعة."
  }
};

const getBaseScenarioCount = (eventId) =>
  revenueScenarios.base.bookings.find((booking) => booking.eventId === eventId)?.count || 0;

const createSimulatorRowsFromEvents = () =>
  eventTypes.map((eventType) => ({
    id: eventType.id,
    name: eventType.name,
    count: getBaseScenarioCount(eventType.id),
    price: eventType.price,
    guestCount: eventType.guestCount,
    foodCost: eventType.foodCost,
    extraWorkers: eventType.extraWorkers,
    workerCost: eventType.workerCost,
    setupCost: eventType.setupCost,
    otherDirectCost: eventType.otherDirectCost
  }));

const defaultCustomBookings = createSimulatorRowsFromEvents();

let customBookingRows = defaultCustomBookings.map((booking) => ({
  ...booking
}));

const createCustomId = (prefix) => `${prefix}-${Date.now()}-${Math.round(Math.random() * 1000)}`;

const renderInvestmentTable = () => {
  const tableBody = document.querySelector("[data-investment-table]");
  const mobileList = document.querySelector("[data-investment-mobile]");

  if (!tableBody || !mobileList) {
    return;
  }

  const total = investmentItems.reduce((sum, item) => sum + item.amount, 0);
  const setupTotal = investmentItems
    .filter((item) => item.category !== "احتياطي نقدي")
    .reduce((sum, item) => sum + item.amount, 0);
  const reserveTotal = investmentItems
    .filter((item) => item.category === "احتياطي نقدي")
    .reduce((sum, item) => sum + item.amount, 0);

  document.querySelector("[data-capital-total]").textContent = formatMoney(total);
  document.querySelector("[data-capital-setup]").textContent = formatMoney(setupTotal);
  document.querySelector("[data-capital-reserve]").textContent = formatMoney(reserveTotal);
  document.querySelector("[data-investment-total]").textContent = formatMoney(total);

  tableBody.innerHTML = investmentItems
    .map((item) => {
      const percent = formatPercent((item.amount / total) * 100);

      return `
        <tr>
          <th scope="row">${item.item}</th>
          <td>${item.category}</td>
          <td class="money-cell">${formatMoney(item.amount)}</td>
          <td class="percent-cell">${percent}</td>
          <td>${item.purpose}</td>
        </tr>
      `;
    })
    .join("");

  mobileList.innerHTML = investmentItems
    .map((item) => {
      const percent = formatPercent((item.amount / total) * 100);

      return `
        <article class="investment-mobile-item">
          <div class="investment-mobile-head">
            <strong>${item.item}</strong>
            <span>${formatMoney(item.amount)}</span>
          </div>
          <div class="investment-mobile-meta">${item.category} — ${percent} من إجمالي الاستثمار</div>
          <p class="investment-mobile-purpose">${item.purpose}</p>
        </article>
      `;
    })
    .join("");
};

renderInvestmentTable();

const setText = (selector, value) => {
  const element = document.querySelector(selector);

  if (element) {
    element.textContent = value;
  }
};

const renderMonthlyOperations = () => {
  const staffTable = document.querySelector("[data-staff-table]");
  const staffMobile = document.querySelector("[data-staff-mobile]");
  const expenseTable = document.querySelector("[data-expense-table]");
  const expenseMobile = document.querySelector("[data-expense-mobile]");

  if (!staffTable || !staffMobile || !expenseTable || !expenseMobile) {
    return;
  }

  const staffCount = operatingStaff.reduce((sum, item) => sum + item.count, 0);
  const payrollTotal = operatingStaff.reduce((sum, item) => sum + item.count * item.salary, 0);
  const expensesTotal = monthlyOperatingExpenses.reduce((sum, item) => sum + item.amount, 0);
  const monthlyTotal = payrollTotal + expensesTotal;
  const annualTotal = monthlyTotal * 12;
  const reserveAmount = investmentItems
    .filter((item) => item.category === "احتياطي نقدي")
    .reduce((sum, item) => sum + item.amount, 0);
  const reserveCoverageMonths = reserveAmount / monthlyTotal;
  const payrollShare = (payrollTotal / monthlyTotal) * 100;
  const expensesShare = (expensesTotal / monthlyTotal) * 100;

  setText("[data-staff-count]", String(staffCount).padStart(2, "0"));
  setText("[data-payroll-total]", formatMoney(payrollTotal));
  setText("[data-monthly-fixed-total]", formatMoney(monthlyTotal));
  setText("[data-staff-total-count]", `${staffCount} موظفين`);
  setText("[data-staff-total-payroll]", formatMoney(payrollTotal));
  setText("[data-expenses-total]", formatMoney(expensesTotal));
  setText("[data-summary-payroll]", formatMoney(payrollTotal));
  setText("[data-summary-expenses]", formatMoney(expensesTotal));
  setText("[data-summary-monthly]", formatMoney(monthlyTotal));
  setText("[data-summary-annual]", formatMoney(annualTotal));
  setText("[data-bar-payroll]", formatMoney(payrollTotal));
  setText("[data-bar-expenses]", formatMoney(expensesTotal));
  setText("[data-inline-monthly-total]", formatMoney(monthlyTotal));
  setText("[data-reserve-amount]", formatMoney(reserveAmount));
  setText("[data-reserve-monthly]", formatMoney(monthlyTotal));
  setText("[data-reserve-coverage]", `${reserveCoverageMonths.toFixed(2)} أشهر`);

  const salarySegment = document.querySelector("[data-salary-segment]");
  const expenseSegment = document.querySelector("[data-expense-segment]");

  if (salarySegment && expenseSegment) {
    salarySegment.style.width = `${payrollShare}%`;
    expenseSegment.style.width = `${expensesShare}%`;
  }

  staffTable.innerHTML = operatingStaff
    .map((item, index) => {
      const monthlyTotalForRole = item.count * item.salary;

      return `
        <tr>
          <th scope="row">${String(index + 1).padStart(2, "0")} — ${item.role}</th>
          <td class="number-cell">${item.count}</td>
          <td class="money-cell">${formatMoney(item.salary)}</td>
          <td class="money-cell">${formatMoney(monthlyTotalForRole)}</td>
          <td>${item.responsibilities}</td>
        </tr>
      `;
    })
    .join("");

  staffMobile.innerHTML = operatingStaff
    .map((item, index) => {
      const monthlyTotalForRole = item.count * item.salary;

      return `
        <article class="operation-mobile-item">
          <div class="operation-mobile-head">
            <strong>${String(index + 1).padStart(2, "0")} — ${item.role}</strong>
            <span>${formatMoney(monthlyTotalForRole)}</span>
          </div>
          <div class="operation-mobile-meta">العدد: ${item.count} — الراتب الفردي: ${formatMoney(item.salary)}</div>
          <p class="operation-mobile-purpose">${item.responsibilities}</p>
        </article>
      `;
    })
    .join("");

  expenseTable.innerHTML = monthlyOperatingExpenses
    .map((item) => `
      <tr>
        <th scope="row">${item.item}</th>
        <td class="money-cell">${formatMoney(item.amount)}</td>
        <td>${item.description}</td>
      </tr>
    `)
    .join("");

  expenseMobile.innerHTML = monthlyOperatingExpenses
    .map((item) => `
      <article class="operation-mobile-item">
        <div class="operation-mobile-head">
          <strong>${item.item}</strong>
          <span>${formatMoney(item.amount)}</span>
        </div>
        <p class="operation-mobile-purpose">${item.description}</p>
      </article>
    `)
    .join("");
};

renderMonthlyOperations();

const getMonthlyFixedCost = () => {
  const payrollTotal = operatingStaff.reduce((sum, item) => sum + item.count * item.salary, 0);
  const expensesTotal = monthlyOperatingExpenses.reduce((sum, item) => sum + item.amount, 0);
  return payrollTotal + expensesTotal;
};

const getEventLaborCost = (eventType) => (Number(eventType.extraWorkers) || 0) * (Number(eventType.workerCost) || 0);

const getEventDirectCostItems = (eventType) => [
  Number(eventType.foodCost) || 0,
  getEventLaborCost(eventType),
  Number(eventType.setupCost) || 0,
  Number(eventType.otherDirectCost) || 0
];

const getEventDirectCost = (eventType) => getEventDirectCostItems(eventType).reduce((sum, item) => sum + item, 0);

const getEventContribution = (eventType) => {
  const directCost = getEventDirectCost(eventType);

  return eventType.price - directCost;
};

const getScenarioBookings = (scenario) => {
  if (scenario.bookings) {
    return scenario.bookings;
  }

  return Object.entries(scenario.mix || {}).map(([eventId, count]) => ({ eventId, count }));
};

const calculateScenario = (scenario) => {
  const fixedCost = getMonthlyFixedCost();
  const totals = getScenarioBookings(scenario).reduce(
    (summary, eventType) => {
      const eventDefinition = eventTypes.find((item) => item.id === eventType.eventId);

      if (!eventDefinition) {
        return summary;
      }

      const count = eventType.count || 0;
      const directCost = getEventDirectCost(eventDefinition);

      summary.events += count;
      summary.revenue += count * eventDefinition.price;
      summary.directCosts += count * directCost;
      summary.contribution += count * (eventDefinition.price - directCost);

      return summary;
    },
    { events: 0, revenue: 0, directCosts: 0, contribution: 0 }
  );

  totals.fixedCost = fixedCost;
  totals.result = totals.contribution - fixedCost;
  totals.margin = totals.revenue === 0 ? 0 : (totals.result / totals.revenue) * 100;
  totals.averageBooking = totals.events === 0 ? 0 : totals.revenue / totals.events;

  return totals;
};

const getBookingRowDirectCost = (booking) => {
  const foodCost = Number(booking.foodCost) || 0;
  const tempLaborCost = (Number(booking.extraWorkers) || 0) * (Number(booking.workerCost) || 0);
  const setupCost = Number(booking.setupCost) || 0;
  const otherDirectCost = Number(booking.otherDirectCost) || 0;

  return foodCost + tempLaborCost + setupCost + otherDirectCost;
};

const calculateCustomSimulator = () => {
  const fixedCost = getMonthlyFixedCost();
  const totals = customBookingRows.reduce(
    (summary, booking) => {
      const count = Number(booking.count) || 0;
      const price = Number(booking.price) || 0;
      const directCost = getBookingRowDirectCost(booking);

      summary.events += count;
      summary.revenue += count * price;
      summary.directCosts += count * directCost;
      summary.contribution += count * (price - directCost);

      return summary;
    },
    { events: 0, revenue: 0, directCosts: 0, contribution: 0 }
  );

  totals.fixedCost = fixedCost;
  totals.result = totals.contribution - fixedCost;
  totals.averageBooking = totals.events === 0 ? 0 : totals.revenue / totals.events;

  return totals;
};

const updateCustomSimulatorTotals = () => {
  const totals = calculateCustomSimulator();

  setText("[data-custom-events]", totals.events);
  setText("[data-custom-average]", formatMoney(Math.round(totals.averageBooking)));
  setText("[data-custom-revenue]", formatMoney(totals.revenue));
  setText("[data-custom-direct]", formatMoney(totals.directCosts));
  setText("[data-custom-contribution]", formatMoney(totals.contribution));
  setText("[data-custom-fixed]", formatMoney(totals.fixedCost));
  setText("[data-custom-result]", totals.result < 0 ? `عجز ${formatMoney(Math.abs(totals.result))}` : formatMoney(totals.result));

  const resultElement = document.querySelector("[data-custom-result]");

  if (resultElement) {
    resultElement.classList.toggle("is-deficit", totals.result < 0);
  }
};

const syncEventTypesFromSimulator = () => {
  customBookingRows.forEach((booking) => {
    const eventType = eventTypes.find((item) => item.id === booking.id);

    if (!eventType) {
      return;
    }

    eventType.name = booking.name;
    eventType.price = Number(booking.price) || 0;
    eventType.guestCount = Number(booking.guestCount) || 0;
    eventType.guestRange = `${eventType.guestCount} ضيفاً`;
    eventType.foodCost = Number(booking.foodCost) || 0;
    eventType.extraWorkers = Number(booking.extraWorkers) || 0;
    eventType.workerCost = Number(booking.workerCost) || 0;
    eventType.setupCost = Number(booking.setupCost) || 0;
    eventType.otherDirectCost = Number(booking.otherDirectCost) || 0;
  });

  revenueScenarios.base.bookings = customBookingRows
    .filter((booking) => eventTypes.some((eventType) => eventType.id === booking.id))
    .map((booking) => ({ eventId: booking.id, count: Number(booking.count) || 0 }));
};

const renderExtraServicePricing = () => {
  const vendorInput = document.querySelector("[data-vendor-cost]");
  const marginInput = document.querySelector("[data-management-margin]");
  const output = document.querySelector("[data-client-added-price]");

  if (!vendorInput || !marginInput || !output) {
    return;
  }

  const update = () => {
    const vendorCost = Number(vendorInput.value) || 0;
    const margin = Number(marginInput.value) || 0;
    output.textContent = formatMoney(Math.round(vendorCost * (1 + margin / 100)));
  };

  vendorInput.addEventListener("input", update);
  marginInput.addEventListener("input", update);
  update();
};

const renderCustomSimulator = () => {
  const simulator = document.querySelector("[data-booking-simulator]");
  const addButton = document.querySelector("[data-add-booking]");

  if (!simulator || !addButton) {
    return;
  }

  const renderRows = () => {
    simulator.innerHTML = customBookingRows
      .map((booking, index) => `
        <article class="booking-row" data-booking-id="${booking.id}">
          <div class="booking-row-head">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${booking.name || "نوع فعالية جديد"}</strong>
          </div>
          <div class="booking-grid">
            <label>
              <span>نوع الفعالية</span>
              <input type="text" value="${booking.name}" data-field="name" aria-label="نوع الفعالية">
            </label>
            <label>
              <span>عدد الحجوزات</span>
              <input type="number" min="0" step="1" value="${booking.count}" data-field="count" aria-label="عدد الحجوزات">
            </label>
            <label>
              <span>سعر الحجز</span>
              <input type="number" min="3000" step="50" value="${booking.price}" data-field="price" aria-label="سعر الحجز">
            </label>
            <label>
              <span>متوسط الضيوف</span>
              <input type="number" min="0" step="1" value="${booking.guestCount}" data-field="guestCount" aria-label="متوسط عدد الضيوف">
            </label>
            <label>
              <span>تكلفة الطعام</span>
              <input type="number" min="0" step="10" value="${booking.foodCost}" data-field="foodCost" aria-label="تكلفة الطعام">
            </label>
            <label>
              <span>العمال الإضافيون</span>
              <input type="number" min="0" step="1" value="${booking.extraWorkers}" data-field="extraWorkers" aria-label="عدد العمال الإضافيين">
            </label>
            <label>
              <span>تكلفة العامل</span>
              <input type="number" min="0" step="5" value="${booking.workerCost}" data-field="workerCost" aria-label="تكلفة العامل الإضافي">
            </label>
            <label>
              <span>تكاليف التجهيزات</span>
              <input type="number" min="0" step="10" value="${booking.setupCost}" data-field="setupCost" aria-label="تكاليف التجهيزات">
            </label>
            <label>
              <span>مصاريف مباشرة أخرى</span>
              <input type="number" min="0" step="10" value="${booking.otherDirectCost}" data-field="otherDirectCost" aria-label="المصاريف المباشرة الأخرى">
            </label>
            <div class="booking-row-total">
              <span>التكلفة المباشرة للحجز</span>
              <strong>${formatMoney(getBookingRowDirectCost(booking))}</strong>
            </div>
          </div>
        </article>
      `)
      .join("");

    updateCustomSimulatorTotals();
  };

  simulator.addEventListener("input", (event) => {
    const bookingElement = event.target.closest("[data-booking-id]");
    const booking = customBookingRows.find((item) => item.id === bookingElement?.dataset.bookingId);

    if (!booking) {
      return;
    }

    if (event.target.dataset.field) {
      const field = event.target.dataset.field;
      booking[field] = event.target.type === "number" ? Number(event.target.value) : event.target.value;
    }

    const rowTotal = bookingElement.querySelector(".booking-row-total strong");

    if (rowTotal) {
      rowTotal.textContent = formatMoney(getBookingRowDirectCost(booking));
    }

    syncEventTypesFromSimulator();
    activeScenarioKey = "base";
    updateCustomSimulatorTotals();
    renderFinancialOutputs();
  });

  addButton.addEventListener("click", () => {
    customBookingRows.push({
      id: createCustomId("booking"),
      name: "فعالية مخصصة",
      count: 1,
      price: 3000,
      guestCount: 20,
      foodCost: 250,
      extraWorkers: 0,
      workerCost: 50,
      setupCost: 0,
      otherDirectCost: 0
    });
    renderRows();
  });

  renderRows();
};

const investorShareRate = 0.4;
const ownerShareRate = 0.6;
const yearLabels = ["الأولى", "الثانية", "الثالثة", "الرابعة", "الخامسة"];
const annualAdditionalAdjustments = [0, 0, 0, 0, 0];
const getDistributableProfit = (estimatedNetProfit) => Math.max(estimatedNetProfit, 0);
const getShareValue = (estimatedNetProfit, shareRate) => getDistributableProfit(estimatedNetProfit) * shareRate;

let activeScenarioKey = "base";
let roiSectionReady = false;

const renderFinancialOutputs = () => {
  const categories = document.querySelector("[data-event-categories]");
  const comparison = document.querySelector("[data-event-comparison]");
  const comparisonMobile = document.querySelector("[data-event-comparison-mobile]");
  const annualHead = document.querySelector("[data-annual-head]");
  const annualTable = document.querySelector("[data-annual-table]");
  const annualMobile = document.querySelector("[data-annual-mobile]");

  if (!categories || !comparison || !comparisonMobile || !annualHead || !annualTable || !annualMobile) {
    return;
  }

  categories.innerHTML = eventTypes
    .map((eventType, index) => `
      <article class="event-category">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <h3>${eventType.name}</h3>
        <div class="guest-range">عدد الضيوف المرجعي: ${eventType.guestRange}</div>
        <div class="event-price">${formatMoney(eventType.price)}</div>
        <p>${eventType.description}</p>
        <ul>
          <li>التكلفة المباشرة: ${formatMoney(getEventDirectCost(eventType))}</li>
          <li>المساهمة التشغيلية: ${formatMoney(getEventContribution(eventType))}</li>
          <li>الطعام والضيافة: ${formatMoney(eventType.foodCost)}</li>
          <li>العمالة والتجهيزات: ${formatMoney(getEventLaborCost(eventType) + eventType.setupCost + eventType.otherDirectCost)}</li>
        </ul>
        ${eventType.note ? `<p class="event-note">${eventType.note}</p>` : ""}
      </article>
    `)
    .join("");

  comparison.innerHTML = eventTypes
    .map((eventType) => {
      const directCost = getEventDirectCost(eventType);
      const contribution = getEventContribution(eventType);
      const costRatio = (directCost / eventType.price) * 100;

      return `
        <tr>
          <th scope="row">${eventType.name}</th>
          <td class="money-cell">${formatMoney(eventType.price)}</td>
          <td class="money-cell">${formatMoney(directCost)}</td>
          <td class="contribution-cell">${formatMoney(contribution)}</td>
          <td class="percent-cell">${formatPercent(costRatio)}</td>
        </tr>
      `;
    })
    .join("");

  comparisonMobile.innerHTML = eventTypes
    .map((eventType) => {
      const directCost = getEventDirectCost(eventType);
      const contribution = getEventContribution(eventType);
      const costRatio = (directCost / eventType.price) * 100;

      return `
        <article class="operation-mobile-item">
          <div class="operation-mobile-head">
            <strong>${eventType.name}</strong>
            <span>${formatMoney(contribution)}</span>
          </div>
          <div class="operation-mobile-meta">السعر: ${formatMoney(eventType.price)} — التكلفة: ${formatMoney(directCost)} — نسبة التكلفة: ${formatPercent(costRatio)}</div>
        </article>
      `;
    })
    .join("");

  const scenarioKeys = Object.keys(revenueScenarios);
  const annualRows = [
    ["عدد الفعاليات سنوياً", (totals) => `${totals.events * 12}`],
    ["متوسط قيمة الحجز", (totals) => formatMoney(Math.round(totals.averageBooking))],
    ["الإيرادات السنوية", (totals) => formatMoney(totals.revenue * 12)],
    ["التكاليف المباشرة", (totals) => formatMoney(totals.directCosts * 12)],
    ["المصاريف الثابتة", (totals) => formatMoney(totals.fixedCost * 12)],
    ["النتيجة التشغيلية السنوية", (totals) => formatMoney(totals.result * 12)]
  ];

  annualHead.innerHTML = `
    <tr>
      <th>المؤشر</th>
      ${scenarioKeys.map((key) => `<th>${revenueScenarios[key].label}</th>`).join("")}
    </tr>
  `;

  annualTable.innerHTML = annualRows
    .map(([label, formatter]) => `
      <tr>
        <th scope="row">${label}</th>
        ${scenarioKeys
          .map((key) => {
            const totals = calculateScenario(revenueScenarios[key]);
            const isResult = label.includes("النتيجة");
            return `<td class="${isResult ? "result-cell" : "money-cell"}">${formatter(totals)}</td>`;
          })
          .join("")}
      </tr>
    `)
    .join("");

  annualMobile.innerHTML = scenarioKeys
    .map((key) => {
      const scenario = revenueScenarios[key];
      const totals = calculateScenario(scenario);

      return `
        <article class="operation-mobile-item">
          <div class="operation-mobile-head">
            <strong>${scenario.label}</strong>
            <span>${formatMoney(totals.result * 12)}</span>
          </div>
          <div class="operation-mobile-meta">فعاليات: ${totals.events * 12} — إيرادات: ${formatMoney(totals.revenue * 12)} — تكاليف مباشرة: ${formatMoney(totals.directCosts * 12)} — مصاريف ثابتة: ${formatMoney(totals.fixedCost * 12)}</div>
        </article>
      `;
    })
    .join("");

  const breakEvenExample = calculateScenario({
    bookings: [
      { eventId: "corporate_event", count: 1 },
      { eventId: "formal_reception", count: 1 }
    ]
  });

  setText(
    "[data-break-even-three]",
    `تتغير نقطة التعادل بحسب مزيج الفعاليات، لأن مساهمة زيارة خاصة واحدة تبلغ ${formatMoney(getEventContribution(eventTypes[0]))}، بينما تبلغ مساهمة الفعالية الموسعة ${formatMoney(getEventContribution(eventTypes[3]))}.`
  );
  setText(
    "[data-break-even-four]",
    `مثال: فعالية مؤسسية واحدة واستقبال رسمي واحد يحققان مساهمة ${formatMoney(breakEvenExample.contribution)} مقابل مصاريف ثابتة ${formatMoney(breakEvenExample.fixedCost)}، أي فائضاً تشغيلياً قدره ${formatMoney(breakEvenExample.result)}. ولا تُعمم هذه النتيجة على جميع الحجوزات.`
  );

  const renderScenario = (scenarioKey) => {
    const scenario = revenueScenarios[scenarioKey];
    const totals = calculateScenario(scenario);
    const resultText = totals.result < 0 ? `عجز ${formatMoney(Math.abs(totals.result))}` : formatMoney(totals.result);
    const resultElement = document.querySelector("[data-scenario-result]");

    setText("[data-scenario-events]", totals.events);
    setText("[data-scenario-average]", formatMoney(Math.round(totals.averageBooking)));
    setText("[data-scenario-revenue]", formatMoney(totals.revenue));
    setText("[data-scenario-direct-cost]", formatMoney(totals.directCosts));
    setText("[data-scenario-fixed-cost]", formatMoney(totals.fixedCost));
    setText("[data-scenario-contribution]", formatMoney(totals.contribution));
    setText("[data-scenario-result]", resultText);
    setText("[data-scenario-investor-share]", formatMoney(getShareValue(totals.result, investorShareRate)));
    setText("[data-scenario-margin]", `${totals.margin.toFixed(2)}%`);
    setText("[data-scenario-annual-result]", formatMoney(totals.result * 12));
    setText("[data-legend-direct]", formatMoney(totals.directCosts));
    setText("[data-legend-fixed]", formatMoney(totals.fixedCost));
    setText("[data-legend-result]", resultText);
    setText("[data-scenario-evaluation]", scenario.evaluation);

    if (resultElement) {
      resultElement.classList.toggle("is-deficit", totals.result < 0);
    }

    const distribution = document.querySelector("[data-scenario-distribution]");
    if (distribution) {
      distribution.innerHTML = getScenarioBookings(scenario)
        .map((booking) => {
          const eventType = eventTypes.find((item) => item.id === booking.eventId);
          return `<span>${eventType?.name || "فعالية"}: <strong>${booking.count || 0}</strong></span>`;
        })
        .join("");
    }

    const mixTable = document.querySelector("[data-scenario-mix-table]");
    if (mixTable) {
      mixTable.innerHTML = `
        <table class="operation-table compact-operation-table">
          <thead>
            <tr>
              <th>نوع الفعالية</th>
              <th>العدد</th>
              <th>الإيرادات</th>
              <th>التكاليف المباشرة</th>
              <th>المساهمة</th>
            </tr>
          </thead>
          <tbody>
            ${getScenarioBookings(scenario)
              .map((booking) => {
                const eventType = eventTypes.find((item) => item.id === booking.eventId);
                const count = booking.count || 0;
                const directCost = eventType ? getEventDirectCost(eventType) : 0;
                const revenue = eventType ? eventType.price * count : 0;
                const direct = directCost * count;
                return `
                  <tr>
                    <th scope="row">${eventType?.name || "فعالية"}</th>
                    <td class="number-cell">${count}</td>
                    <td class="money-cell">${formatMoney(revenue)}</td>
                    <td class="money-cell">${formatMoney(direct)}</td>
                    <td class="contribution-cell">${formatMoney(revenue - direct)}</td>
                  </tr>
                `;
              })
              .join("")}
          </tbody>
        </table>
      `;
    }

    const directSegment = document.querySelector("[data-direct-segment]");
    const fixedSegment = document.querySelector("[data-fixed-segment]");
    const surplusSegment = document.querySelector("[data-surplus-segment]");
    const denominator = Math.max(totals.revenue, totals.directCosts + totals.fixedCost);

    if (directSegment && fixedSegment && surplusSegment) {
      directSegment.style.width = `${(totals.directCosts / denominator) * 100}%`;
      fixedSegment.style.width = `${(totals.fixedCost / denominator) * 100}%`;
      surplusSegment.style.width = `${Math.max(totals.result, 0) / denominator * 100}%`;
      surplusSegment.style.opacity = totals.result > 0 ? "1" : "0";
    }

    document.querySelectorAll("[data-scenario-button]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.scenarioButton === scenarioKey);
    });
  };

  renderScenario(activeScenarioKey);
  if (roiSectionReady) {
    renderRoiSection();
  }
};

const renderRevenueSection = () => {
  document.querySelectorAll("[data-scenario-button]").forEach((button) => {
    button.addEventListener("click", () => {
      activeScenarioKey = button.dataset.scenarioButton;
      renderFinancialOutputs();
    });
  });

  renderCustomSimulator();
  renderExtraServicePricing();
  renderFinancialOutputs();
};

renderRevenueSection();

const getInvestmentCapital = () => investmentItems.reduce((sum, item) => sum + item.amount, 0);

const calculateMixMonthly = (mix) => calculateScenario({ mix });
const calculateBookingsMonthly = (bookings) => calculateScenario({ bookings });

const multiplyMonthlyTotals = (monthlyTotals, months) => ({
  events: monthlyTotals.events * months,
  revenue: monthlyTotals.revenue * months,
  directCosts: monthlyTotals.directCosts * months,
  fixedCost: monthlyTotals.fixedCost * months,
  result: monthlyTotals.result * months
});

const addAnnualTotals = (items) =>
  items.reduce(
    (summary, item) => ({
      events: summary.events + item.events,
      revenue: summary.revenue + item.revenue,
      directCosts: summary.directCosts + item.directCosts,
      fixedCost: summary.fixedCost + item.fixedCost,
      result: summary.result + item.result
    }),
    { events: 0, revenue: 0, directCosts: 0, fixedCost: 0, result: 0 }
  );

const launchPhases = [
  {
    period: "الأشهر 1–3",
    months: 3,
    bookings: [
      { eventId: "visit_lunch", count: 1 },
      { eventId: "corporate_event", count: 1 }
    ]
  },
  {
    period: "الأشهر 4–6",
    months: 3,
    bookings: [
      { eventId: "visit_lunch", count: 1 },
      { eventId: "corporate_event", count: 1 },
      { eventId: "formal_reception", count: 1 }
    ]
  },
  {
    period: "الأشهر 7–9",
    months: 3,
    bookings: [
      { eventId: "visit_lunch", count: 1 },
      { eventId: "corporate_event", count: 2 },
      { eventId: "formal_reception", count: 1 }
    ]
  },
  {
    period: "الأشهر 10–12",
    months: 3,
    bookings: [
      { eventId: "visit_lunch", count: 1 },
      { eventId: "corporate_event", count: 2 },
      { eventId: "formal_reception", count: 1 },
      { eventId: "large_event", count: 1 }
    ]
  }
];

const fiveYearPlanDefinitions = [
  { label: "الأولى", phases: launchPhases },
  { label: "الثانية", monthlyBookings: revenueScenarios.base.bookings },
  {
    label: "الثالثة",
    monthlyBookings: [
      { eventId: "visit_lunch", count: 1 },
      { eventId: "corporate_event", count: 2 },
      { eventId: "formal_reception", count: 2 },
      { eventId: "large_event", count: 1 }
    ]
  },
  {
    label: "الرابعة",
    monthlyBookings: [
      { eventId: "visit_lunch", count: 1 },
      { eventId: "corporate_event", count: 2 },
      { eventId: "formal_reception", count: 2 },
      { eventId: "large_event", count: 1 }
    ]
  },
  {
    label: "الخامسة",
    monthlyBookings: [
      { eventId: "visit_lunch", count: 1 },
      { eventId: "corporate_event", count: 2 },
      { eventId: "formal_reception", count: 2 },
      { eventId: "large_event", count: 2 }
    ]
  }
];

const calculateYearPlan = (definition) => {
  if (definition.phases) {
    const phaseTotals = definition.phases.map((phase) => {
      const monthly = phase.bookings ? calculateBookingsMonthly(phase.bookings) : calculateMixMonthly(phase.mix);
      return multiplyMonthlyTotals(monthly, phase.months);
    });

    return addAnnualTotals(phaseTotals);
  }

  if (definition.monthlyBookings) {
    return multiplyMonthlyTotals(calculateBookingsMonthly(definition.monthlyBookings), 12);
  }

  return multiplyMonthlyTotals(calculateMixMonthly(definition.monthlyMix), 12);
};

const calculatePaybackPeriod = (returnData, capital) => {
  let cumulativeReturn = 0;

  for (let index = 0; index < returnData.length; index += 1) {
    const annualShare = returnData[index].investorShare;

    if (cumulativeReturn + annualShare >= capital && annualShare > 0) {
      const remaining = capital - cumulativeReturn;
      const months = Math.ceil(remaining / (annualShare / 12));
      return { yearIndex: index, months, cumulativeReturn: capital, remaining: 0 };
    }

    cumulativeReturn += annualShare;
  }

  const lastAnnualShare = returnData[returnData.length - 1]?.investorShare || 0;
  const monthlyShare = lastAnnualShare / 12;
  const remaining = Math.max(capital - cumulativeReturn, 0);
  const extraMonths = monthlyShare > 0 ? Math.ceil(remaining / monthlyShare) : 0;

  return {
    yearIndex: returnData.length - 1 + Math.ceil(extraMonths / 12),
    months: extraMonths % 12 || (extraMonths ? 12 : 0),
    cumulativeReturn,
    remaining
  };
};

const formatPaybackPeriod = ({ yearIndex, months }) => {
  const yearText = yearIndex === 0 ? "" : yearIndex === 1 ? "سنة واحدة" : yearIndex === 2 ? "سنتين" : `${yearIndex} سنوات`;
  const monthText = months === 0 ? "" : months === 1 ? "شهر واحد" : months === 2 ? "شهرين" : `${months} أشهر`;

  return `نحو ${[yearText, monthText].filter(Boolean).join(" و")}`;
};

function renderRoiSection() {
  const scenarioHead = document.querySelector("[data-roi-scenario-head]");
  const scenarioTable = document.querySelector("[data-roi-scenario-table]");
  const scenarioMobile = document.querySelector("[data-roi-scenario-mobile]");
  const rampTimeline = document.querySelector("[data-ramp-timeline]");
  const fiveYearTable = document.querySelector("[data-five-year-table]");
  const fiveYearMobile = document.querySelector("[data-five-year-mobile]");
  const annualAdjustmentControls = document.querySelector("[data-annual-adjustments]");
  const returnTable = document.querySelector("[data-return-table]");
  const returnMobile = document.querySelector("[data-return-mobile]");
  const returnBars = document.querySelector("[data-return-bars]");
  const paybackChart = document.querySelector("[data-payback-chart]");
  const sensitivityTable = document.querySelector("[data-sensitivity-table]");
  const sensitivityMobile = document.querySelector("[data-sensitivity-mobile]");

  if (!scenarioHead || !scenarioTable || !scenarioMobile || !rampTimeline || !fiveYearTable || !fiveYearMobile || !annualAdjustmentControls || !returnTable || !returnMobile || !returnBars || !paybackChart || !sensitivityTable || !sensitivityMobile) {
    return;
  }

  const capital = getInvestmentCapital();
  const ownerShare = 1 - investorShareRate;

  setText("[data-roi-capital]", formatMoney(capital));
  setText("[data-investor-share]", `${investorShareRate * 100}%`);
  setText("[data-owner-share]", `${ownerShare * 100}%`);

  const scenarioKeys = Object.keys(revenueScenarios);
  const scenarioData = scenarioKeys.map((key) => {
    const monthly = calculateScenario(revenueScenarios[key]);
    const annualResult = monthly.result * 12;
    const investorAnnualShare = getShareValue(annualResult, investorShareRate);
    const payback = investorAnnualShare > 0 ? capital / investorAnnualShare : null;

    return { key, label: revenueScenarios[key].label, monthly, annualResult, investorAnnualShare, payback };
  });

  const roiRows = [
    ["عدد الفعاليات شهرياً", (item) => item.monthly.events],
    ["متوسط قيمة الحجز", (item) => formatMoney(Math.round(item.monthly.averageBooking))],
    ["الإيرادات الشهرية", (item) => formatMoney(item.monthly.revenue)],
    ["التكاليف المباشرة", (item) => formatMoney(item.monthly.directCosts)],
    ["المصاريف التشغيلية الثابتة", (item) => formatMoney(item.monthly.fixedCost)],
    ["النتيجة التشغيلية الشهرية", (item) => formatMoney(item.monthly.result)],
    ["النتيجة التشغيلية السنوية", (item) => formatMoney(item.annualResult)],
    ["الحصة الافتراضية للمستثمر 40% من صافي الأرباح بعد التسويات", (item) => formatMoney(item.investorAnnualShare)],
    ["فترة الاسترداد الحسابية البسيطة", (item) => (item.payback ? `${item.payback.toFixed(2)} سنوات` : "لا يتحقق ضمن استمرار هذا السيناريو")]
  ];

  scenarioHead.innerHTML = `
    <tr>
      <th>المؤشر</th>
      ${scenarioData.map((item) => `<th>${item.label}</th>`).join("")}
    </tr>
  `;

  scenarioTable.innerHTML = roiRows
    .map(([label, formatter]) => `
      <tr>
        <th scope="row">${label}</th>
        ${scenarioData.map((item) => `<td class="money-cell">${formatter(item)}</td>`).join("")}
      </tr>
    `)
    .join("");

  scenarioMobile.innerHTML = scenarioData
    .map((item) => `
      <article class="operation-mobile-item">
        <div class="operation-mobile-head">
          <strong>${item.label}</strong>
          <span>${formatMoney(item.annualResult)}</span>
        </div>
        <div class="operation-mobile-meta">فعاليات شهرية: ${item.monthly.events} — حصة المستثمر الافتراضية: ${formatMoney(item.investorAnnualShare)} — الاسترداد: ${item.payback ? `${item.payback.toFixed(2)} سنوات` : "لا يتحقق"}</div>
      </article>
    `)
    .join("");

  const phaseData = launchPhases.map((phase) => {
    const monthly = phase.bookings ? calculateBookingsMonthly(phase.bookings) : calculateMixMonthly(phase.mix);
    return { ...phase, monthly };
  });

  rampTimeline.innerHTML = phaseData
    .map((phase) => `
      <article class="ramp-step">
        <span>${phase.monthly.events}</span>
        <h3>${phase.period}</h3>
        <p>فعاليات شهرياً: ${phase.monthly.events}</p>
        <p>الإيرادات الشهرية: ${formatMoney(phase.monthly.revenue)}</p>
        <p>النتيجة التشغيلية الشهرية: ${formatMoney(phase.monthly.result)}</p>
      </article>
    `)
    .join("");

  const yearOne = calculateYearPlan(fiveYearPlanDefinitions[0]);
  setText("[data-year-one-events]", yearOne.events);
  setText("[data-year-one-revenue]", formatMoney(yearOne.revenue));
  setText("[data-year-one-direct]", formatMoney(yearOne.directCosts));
  setText("[data-year-one-result]", formatMoney(yearOne.result));

  fiveYearPlanDefinitions[1].monthlyBookings = revenueScenarios.base.bookings;

  const fiveYearData = fiveYearPlanDefinitions.map((definition, index) => {
    const year = calculateYearPlan(definition);
    const additionalAdjustments = Number(annualAdditionalAdjustments[index]) || 0;
    const totalExpenses = year.directCosts + year.fixedCost + additionalAdjustments;
    const estimatedNetProfit = year.revenue - totalExpenses;
    const distributableProfit = getDistributableProfit(estimatedNetProfit);

    return {
      label: yearLabels[index],
      ...year,
      additionalAdjustments,
      totalExpenses,
      estimatedNetProfit,
      distributableProfit,
      investorShare: distributableProfit * investorShareRate,
      ownerShare: distributableProfit * ownerShare
    };
  });

  fiveYearTable.innerHTML = fiveYearData
    .map((year) => `
      <tr>
        <th scope="row">${year.label}</th>
        <td class="number-cell">${year.events}</td>
        <td class="money-cell">${formatMoney(year.revenue)}</td>
        <td class="money-cell">${formatMoney(year.totalExpenses)}</td>
        <td class="money-cell highlight-financial">${formatMoney(year.estimatedNetProfit)}</td>
        <td class="money-cell highlight-financial">${formatMoney(year.investorShare)}</td>
        <td class="money-cell highlight-financial">${formatMoney(year.ownerShare)}</td>
      </tr>
    `)
    .join("");

  fiveYearMobile.innerHTML = fiveYearData
    .map((year) => `
      <article class="operation-mobile-item">
        <div class="operation-mobile-head">
          <strong>السنة ${year.label}</strong>
          <span>${formatMoney(year.estimatedNetProfit)}</span>
        </div>
        <div class="operation-mobile-meta">فعاليات: ${year.events} — إيرادات: ${formatMoney(year.revenue)} — إجمالي مصاريف: ${formatMoney(year.totalExpenses)} — المستثمر: ${formatMoney(year.investorShare)} — بيت التحفيات: ${formatMoney(year.ownerShare)}</div>
      </article>
    `)
    .join("");

  if (!annualAdjustmentControls.contains(document.activeElement)) {
    annualAdjustmentControls.innerHTML = fiveYearData
      .map((year, index) => `
        <label>
          <span>تسويات ومصاريف إضافية للسنة ${year.label}</span>
          <input type="number" min="0" step="500" value="${annualAdditionalAdjustments[index]}" data-annual-adjustment="${index}" aria-label="المصاريف والتسويات الإضافية للسنة ${year.label}">
        </label>
      `)
      .join("");

    annualAdjustmentControls.querySelectorAll("[data-annual-adjustment]").forEach((input) => {
      input.addEventListener("input", () => {
        annualAdditionalAdjustments[Number(input.dataset.annualAdjustment)] = Number(input.value) || 0;
        renderRoiSection();
      });
    });
  }

  const baseMonthly = calculateScenario(revenueScenarios.base);
  const sensitivityData = [
    {
      label: "السيناريو الأساسي دون تعديل",
      revenue: baseMonthly.revenue,
      directCosts: baseMonthly.directCosts
    },
    {
      label: "انخفاض أسعار الحجوزات 15%",
      revenue: baseMonthly.revenue * 0.85,
      directCosts: baseMonthly.directCosts
    },
    {
      label: "ارتفاع التكاليف المباشرة 25%",
      revenue: baseMonthly.revenue,
      directCosts: baseMonthly.directCosts * 1.25
    }
  ].map((item) => {
    const contribution = item.revenue - item.directCosts;
    const result = contribution - baseMonthly.fixedCost;
    const margin = item.revenue === 0 ? 0 : (result / item.revenue) * 100;
    return { ...item, contribution, result, margin };
  });

  sensitivityTable.innerHTML = sensitivityData
    .map((item) => `
      <tr>
        <th scope="row">${item.label}</th>
        <td class="money-cell">${formatMoney(Math.round(item.revenue))}</td>
        <td class="money-cell">${formatMoney(Math.round(item.directCosts))}</td>
        <td class="money-cell">${formatMoney(Math.round(item.result))}</td>
        <td class="percent-cell">${formatPercent(item.margin)}</td>
      </tr>
    `)
    .join("");

  sensitivityMobile.innerHTML = sensitivityData
    .map((item) => `
      <article class="operation-mobile-item">
        <div class="operation-mobile-head">
          <strong>${item.label}</strong>
          <span>${formatMoney(Math.round(item.result))}</span>
        </div>
        <div class="operation-mobile-meta">إيرادات: ${formatMoney(Math.round(item.revenue))} — تكاليف مباشرة: ${formatMoney(Math.round(item.directCosts))} — هامش: ${formatPercent(item.margin)}</div>
      </article>
    `)
    .join("");

  const returnData = fiveYearData;

  returnTable.innerHTML = returnData
    .map((year) => `
      <tr>
        <th scope="row">${year.label}</th>
        <td class="money-cell highlight-financial">${formatMoney(year.estimatedNetProfit)}</td>
        <td class="money-cell highlight-financial">${formatMoney(year.investorShare)}</td>
        <td class="money-cell highlight-financial">${formatMoney(year.ownerShare)}</td>
      </tr>
    `)
    .join("");

  returnMobile.innerHTML = returnData
    .map((year) => `
      <article class="operation-mobile-item">
        <div class="operation-mobile-head">
          <strong>السنة ${year.label}</strong>
          <span>${formatMoney(year.investorShare)}</span>
        </div>
        <div class="operation-mobile-meta">صافي الربح التقديري: ${formatMoney(year.estimatedNetProfit)} — بيت التحفيات: ${formatMoney(year.ownerShare)}</div>
      </article>
    `)
    .join("");

  const maxReturn = Math.max(...returnData.map((year) => year.distributableProfit), 0);
  returnBars.innerHTML = returnData
    .map((year) => {
      const totalWidth = maxReturn ? (year.distributableProfit / maxReturn) * 100 : 0;
      const investorWidth = totalWidth * investorShareRate;
      const ownerWidth = totalWidth * ownerShare;

      return `
        <div class="return-bar-row">
          <strong>السنة ${year.label}</strong>
          <div class="return-bar-track">
            <span class="investor-return-segment" style="width:${investorWidth}%"></span>
            <span class="owner-return-segment" style="width:${ownerWidth}%"></span>
          </div>
          <div class="return-bar-caption">المستثمر ${formatMoney(year.investorShare)} — بيت التحفيات ${formatMoney(year.ownerShare)}</div>
        </div>
      `;
    })
    .join("");

  const cumulative = [];
  returnData.reduce((sum, year) => {
    const next = sum + year.investorShare;
    cumulative.push(next);
    return next;
  }, 0);

  const paybackPeriod = calculatePaybackPeriod(returnData, capital);
  const remainingAfterFive = Math.max(capital - cumulative[cumulative.length - 1], 0);
  const recoveryYearMonthlyShare = returnData[Math.min(paybackPeriod.yearIndex, returnData.length - 1)]?.investorShare / 12 || 0;

  setText("[data-payback-period]", formatPaybackPeriod(paybackPeriod));
  setText("[data-cumulative-five-year]", formatMoney(cumulative[cumulative.length - 1]));
  setText("[data-remaining-capital]", formatMoney(remainingAfterFive));
  setText("[data-year-six-monthly-share]", formatMoney(recoveryYearMonthlyShare));

  const chartMax = Math.max(capital, ...cumulative) * 1.08;
  const width = 920;
  const height = 320;
  const padding = { top: 28, right: 44, bottom: 46, left: 32 };
  const plotWidth = width - padding.right - padding.left;
  const plotHeight = height - padding.top - padding.bottom;
  const points = cumulative.map((value, index) => {
    const x = padding.left + (plotWidth / (cumulative.length - 1)) * index;
    const y = padding.top + plotHeight - (value / chartMax) * plotHeight;
    return { x, y, value, label: yearLabels[index] };
  });
  const capitalY = padding.top + plotHeight - (capital / chartMax) * plotHeight;
  const path = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");

  paybackChart.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="نمو العائد التراكمي مقارنة برأس المال المستثمر">
      <line x1="${padding.left}" y1="${capitalY}" x2="${width - padding.right}" y2="${capitalY}" stroke="#4B101C" stroke-width="2" stroke-dasharray="6 6" />
      <text x="${width - padding.right}" y="${capitalY - 8}" text-anchor="end" class="payback-axis-label">${formatMoney(capital)}</text>
      <path d="${path}" fill="none" stroke="#701C2C" stroke-width="4" stroke-linecap="round" />
      ${points
        .map((point) => `
          <line x1="${point.x}" y1="${padding.top + plotHeight}" x2="${point.x}" y2="${point.y}" stroke="#E8E8E8" stroke-width="1" />
          <circle cx="${point.x}" cy="${point.y}" r="6" fill="#701C2C" />
          <text x="${point.x}" y="${height - 18}" text-anchor="middle" class="payback-axis-label">${point.label}</text>
          <text x="${point.x}" y="${point.y - 12}" text-anchor="middle" class="payback-axis-label">${formatMoney(point.value)}</text>
        `)
        .join("")}
    </svg>
  `;
}

roiSectionReady = true;
renderRoiSection();

if (prefersReducedMotion) {
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("is-visible");
  });
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
  });
}
