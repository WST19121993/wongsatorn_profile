const profile = {
  name: "Wongsatorn Maaueai",
  role: "Programmer, Software Engineer | Software Engineering Graduate",
  location: "chachoengsao, Thailand",
  photo: "assets/profile.jpg",
  resume: "assets/Wongsatorn_Resume.pdf",
  summary:
    "Software Engineering graduate from Burapha University with experience maintaining web content, digital pages, and web operations for ASUS Thailand.",
  focus:
    "A concise online CV for presenting background, work history, project experience, and contact details in a format that also works as a digital vCard.",
  signals: [
    [
      "Status",
      "Open to Software Engineering, Sofware Development, and Programmer roles",
    ],
    ["Strength", "Web applications, Full-Stack Development, operations"],
    ["Style", "Practical, organized, user-focused"],
  ],
  contactNote:
    "For job opportunities, freelance web work, or collaboration, reach out through any channel below.",
  contact: {
    email: "wongsatornmaaueai@gmail.com",
    phone: "098-102-8831",
    github: "https://github.com/WST19121993",
    linkedin: "https://www.linkedin.com/in/wongsatorn-maaueai-75a354372/",
  },
  timeline: [
    {
      period: "03/2026 - Present",
      title: "Programmer",
      company: "AKTIO Thailand",
      location: "chachoengsao, Thailand",
      details: [
        "Maintain website content and digital product pages.",
        "Coordinate updates across marketing, product, and technical requirements.",
        "Support reliable publishing workflows for online brand communication.",
      ],
    },
    {
      period: "11/2023 - 03/2026",
      title: "Software Engineer",
      company: "Laem Chabang International Terminal Co., Ltd.",
      location: "chonburi, Thailand",
      details: [
        "Maintain website content and digital product pages.",
        "Coordinate updates across marketing, product, and technical requirements.",
        "Support reliable publishing workflows for online brand communication.",
      ],
    },
    {
      period: "05/2022 - 10/2023",
      title: "Web master",
      company: "ASUS Thailand",
      location: "bangkok, Thailand",
      details: [
        "Maintain website content and digital product pages.",
        "Coordinate updates across marketing, product, and technical requirements.",
        "Support reliable publishing workflows for online brand communication.",
      ],
    },
    {
      period: "University",
      title: "Software Engineering Graduate",
      company: "Burapha University",
      location: "Chonburi, Thailand",
      details: [
        "Studied software engineering foundations, web development, and project delivery.",
        "Built academic and personal projects with frontend and backend technologies.",
      ],
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "PHP",
    "React",
    "Web Content Management",
    "Responsive UI",
    "Gitlab",
    "Github",
    "SQLSRV",
    "MySQL",
    "C#",
    ".NET Core",
    "Node.js",
    "Python",
    "Laravel framework",
    "Grafana Dashboard",
    "Material UI",
    "Reporting Services",
    "SDLC",
    "Miro",
    "Adobe XD",
    "Draw.io",
    "figma",
  ],
  education: [
    {
      title: "Software Engineering",
      place: "Burapha University",
      period: "Graduate",
    },
  ],
  projects: [
    {
      title: "AMS System",
      meta: "Laravel Framework, MySQL",
      description:
        "Workspace and chat-room style project for sharing resources, realtime messages, image sharing, and message reactions.",
      link: "https://github.com/Wongsatornmaa/AMS_project",
      tags: ["Realtime", "Laravel", "MySQL", "Web App"],
    },
    {
      title: "Online CV / vCard",
      meta: "HTML, CSS, JavaScript",
      description:
        "Static profile website with editable timeline data, printable layout, downloadable resume, and vCard export.",
      link: "#profile",
      tags: ["Static Site", "CV", "vCard"],
    },
  ],
};

const $ = (selector) => document.querySelector(selector);

function setText(selector, value) {
  const element = $(selector);
  if (element) element.textContent = value;
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function renderProfile() {
  document.title = `${profile.name} | Online CV`;
  $("#profilePhoto").src = profile.photo;
  $("#resumeLink").href = profile.resume;
  setText("#profileName", profile.name);
  setText("#profileRole", profile.role);
  setText("#profileLocation", profile.location);
  setText("#profileSummary", profile.summary);
  setText("#profileFocus", profile.focus);
  setText("#contactNote", profile.contactNote);
  setText("#footerName", `(c) ${new Date().getFullYear()} ${profile.name}`);

  $("#profileSignals").replaceChildren(
    ...profile.signals.map(([label, value]) => {
      const row = createElement("div");
      row.append(
        createElement("dt", "", label),
        createElement("dd", "", value),
      );
      return row;
    }),
  );
}

function renderTimeline() {
  $("#timelineList").replaceChildren(
    ...profile.timeline.map((item) => {
      const article = createElement("article", "timeline-item");
      const period = createElement("div", "timeline-period", item.period);
      const body = createElement("div");
      body.append(
        createElement("h3", "", item.title),
        createElement("p", "meta", `${item.company} - ${item.location}`),
      );
      const list = createElement("ul");
      item.details.forEach((detail) =>
        list.append(createElement("li", "", detail)),
      );
      body.append(list);
      article.append(period, body);
      return article;
    }),
  );
}

function renderSkills() {
  $("#skillCloud").replaceChildren(
    ...profile.skills.map((skill) =>
      createElement("span", "skill-pill", skill),
    ),
  );

  $("#educationList").replaceChildren(
    ...profile.education.map((item) => {
      const article = createElement("article", "education-item");
      article.append(
        createElement("h3", "", item.title),
        createElement("p", "meta", `${item.place} - ${item.period}`),
      );
      return article;
    }),
  );
}

function renderProjects() {
  $("#projectGrid").replaceChildren(
    ...profile.projects.map((item) => {
      const article = createElement("article", "project-card");
      const text = createElement("div");
      text.append(
        createElement("h3", "", item.title),
        createElement("p", "project-meta", item.meta),
        createElement("p", "", item.description),
      );
      const tags = createElement("div", "tag-row");
      item.tags.forEach((tag) =>
        tags.append(createElement("span", "tag", tag)),
      );
      const link = createElement("a", "", "View project");
      link.href = item.link;
      if (item.link.startsWith("http")) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }
      article.append(text, tags, link);
      return article;
    }),
  );
}

function renderContact() {
  const contactItems = [];
  const cleanPhone = (profile.contact.phone || "").replace(/[^\d+]/g, "");
  const shortUrl = (url) =>
    (url || "").replace(/^https?:\/\//, "").replace(/\/$/, "");

  if (profile.contact.email) {
    contactItems.push([
      "Email",
      `mailto:${profile.contact.email}`,
      profile.contact.email,
    ]);
  }
  if (profile.contact.phone) {
    contactItems.push(["Phone", `tel:${cleanPhone}`, profile.contact.phone]);
  }
  if (profile.contact.website) {
    contactItems.push([
      "Website",
      profile.contact.website,
      shortUrl(profile.contact.website),
    ]);
  }
  if (profile.contact.github) {
    contactItems.push([
      "GitHub",
      profile.contact.github,
      shortUrl(profile.contact.github),
    ]);
  }
  if (profile.contact.linkedin) {
    contactItems.push([
      "LinkedIn",
      profile.contact.linkedin,
      shortUrl(profile.contact.linkedin),
    ]);
  }

  $("#contactGrid").replaceChildren(
    ...contactItems.map(([label, href, value]) => {
      const link = createElement("a", "contact-link");
      link.href = href;
      if (href.startsWith("http")) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }
      link.append(
        createElement("span", "", label),
        createElement("span", "", value),
      );
      return link;
    }),
  );
}

function downloadVCard() {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${profile.name}`,
    `TITLE:${profile.role}`,
    `ADR;TYPE=WORK:;;;${profile.location};;;;`,
    `EMAIL:${profile.contact.email}`,
    `TEL:${profile.contact.phone}`,
    `NOTE:${profile.summary}`,
    "END:VCARD",
  ].filter((line) => !line.endsWith(":undefined") && !line.endsWith(":"));
  if (profile.contact.website) {
    lines.splice(lines.length - 1, 0, `URL:${profile.contact.website}`);
  }
  const blob = new Blob([lines.join("\n")], {
    type: "text/vcard;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${profile.name.replace(/\s+/g, "-")}.vcf`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function showToast(message) {
  const toast = createElement("div", "toast", message);
  document.body.append(toast);
  window.setTimeout(() => toast.remove(), 2200);
}

function bindActions() {
  $("#saveContact").addEventListener("click", downloadVCard);
  $("#printPage").addEventListener("click", () => window.print());
  $("#themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "preferred-theme",
      document.body.classList.contains("dark") ? "dark" : "light",
    );
  });
  $("#copyLink").addEventListener("click", async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Profile link copied");
      return;
    }
    showToast(window.location.href);
  });

  if (localStorage.getItem("preferred-theme") === "dark") {
    document.body.classList.add("dark");
  }
}

renderProfile();
renderTimeline();
renderSkills();
renderProjects();
renderContact();
bindActions();
