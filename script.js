const work = [
  {
    title: "Landing page copy refresh",
    status: "Ready to review",
    updated: "Today"
  },
  {
    title: "Client onboarding sequence",
    status: "Draft",
    updated: "Yesterday"
  },
  {
    title: "Case study outline",
    status: "Approved",
    updated: "Oct 4"
  },
  {
    title: "Support response snippets",
    status: "Draft",
    updated: "Oct 2"
  }
];

const list = document.querySelector("#workList");

list.innerHTML = work
  .map(
    (item) => `
      <li>
        <div>
          <strong>${item.title}</strong>
          <span>${item.updated}</span>
        </div>
        <span>${item.status}</span>
      </li>
    `
  )
  .join("");
