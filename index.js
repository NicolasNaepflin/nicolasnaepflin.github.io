import {
  bio,
  skills,
  projects,
  education,
  experience,
  footer,
} from "./data.js";

import { URLs } from './user-data/urls.js';

const { webProjects, softwareProjects, androidProjects, freelanceProjects } =
  projects;
const { medium, gitConnected } = URLs;

/**
 * Fetches blogs from Medium profile.
 *
 * @function
 * @async
 *
 * @throws {Error} If there is any error in fetching the blogs from Medium profile.
 *
 * @returns {void}
 */

async function fetchBlogsFromMedium(url) {
  try {
    const response = await fetch(url);
    const { items } = await response.json();
    populateBlogs(items, "blogs");
  } catch (error) {
    throw new Error(
      `Error in fetching the blogs from Medium profile: ${error}`
    );
  }
}


async function fetchGitConnectedData(url) {
  try {
    const response = await fetch(url);
    console.log(response);
    const { basics } = await response.json();
    // populateBlogs(items, "blogs");
    mapBasicResponse(basics);
  } catch (error) {
    throw new Error(
      `Error in fetching the blogs from git connected: ${error}`
    );
  }
}

function mapBasicResponse(basics) {
  const {
    name,
    label,
    image,
    email,
    phone,
    url,
    summary,
    profiles,
    headline,
    blog,
    yearsOfExperience,
    username,
    locationAsString,
    region,
    karma,
    id,
    followers,
    following,
    picture,
    website
} = basics;

// added title of page
  window.parent.document.title = name;
}

/**
 * Populates bio to the HTML page.
 *
 * @function
 *
 * @param {Array} items - An array of objects that contain bio information.
 * @param {string} id - The id of the HTML element to which bio will be appended.
 *
 * @returns {void}
 */

function populateBio(items, id) {
  const bioTag = document.getElementById(id);
  items.forEach((bioItem) => {
    const p = getElement("p", null);
    p.innerHTML = bioItem;
    bioTag.append(p);
  });
}

/**
 * Populates skills to the HTML page.
 *
 * @function
 *
 * @param {Array} items - An array of objects that contain skill information.
 * @param {string} id - The id of the HTML element to which skills will be appended.
 *
 * @returns {void}
 */

function populateSkills(items, id) {
  const skillsTag = document.getElementById(id);
  items.forEach(({ skillName, color, percentage }) => {
    const h3 = getElement("h3", null);
    h3.innerHTML = skillName;

    const divProgress = getElement("div", "progress");
    const divProgressBar = getElement("div", `progress-bar color-${color}`);
    divProgressBar.style = `width: ${percentage}%`;
    divProgress.append(divProgressBar);

    const divProgressWrap = getElement("div", "progress-wrap");
    divProgressWrap.append(h3, divProgress);

    const divAnimateBox = getElement("div", "col-md-6 animate-box");
    divAnimateBox.append(divProgressWrap);

    skillsTag.append(divAnimateBox);
  });
}

/**
 * Populates projects to the HTML page.
 *
 * @function
 *
 * @param {Array} items - An array of objects that contain project information.
 * @param {string} id - The id of the HTML element to which projects will be appended.
 *
 * @returns {void}
 */

function populateProjects(items, id) {
  let projectdesign = document.getElementById(id);
  projectdesign.innerHTML = ""; // clear previous content

  for (let i = 0; i < items.length; i++) {
    const li = document.createElement("li");

    const projectContent = document.createElement("div");
    projectContent.className = "project-content";

    const img = document.createElement("img");
    img.src = items[i].image;
    img.alt = items[i].projectName;
    img.style.maxWidth = "350px";
    img.style.maxHeight = "200px";
    img.style.objectFit = "contain";

    const textDiv = document.createElement("div");
    textDiv.className = "project-text";

    const p = document.createElement("p");
    p.innerHTML = items[i].summary;

    const link = document.createElement("a");
    link.href = items[i].preview;
    link.target = "_blank";
    link.innerText = "Read more";

    // Optional: add tags
    const tagDiv = document.createElement("div");
    for (let k = 0; k < items[i].techStack.length; k++) {
      const span = document.createElement("span");
      span.className = "badge badge-secondary";
      span.innerText = items[i].techStack[k];
      tagDiv.appendChild(span);
    }

    textDiv.appendChild(p);
    textDiv.appendChild(link);
    textDiv.appendChild(tagDiv);

    projectContent.appendChild(img);
    projectContent.appendChild(textDiv);

    li.appendChild(projectContent);
    projectdesign.appendChild(li);

    if (i !== items.length - 1) {
      const hr = document.createElement("hr");
      projectdesign.appendChild(hr);
    }
  }
}

/**
 * Creates and populates a list of blog posts with specified properties
 *
 * @function
 *
 * @param {Array} items - An array of objects, each representing a blog post
 * @param {string} id - The ID of the parent element where the list of posts will be appended
 *
 * @returns {undefined}
 */

/**
 * Populate the HTML timeline with items.
 * @param {Array} items - An array of objects that represent the timeline items.
 * @param {string} id - The id of the main container element in the HTML.
 * @property {string} items[].subtitle - The subtitle of the timeline item.
 * @property {string} items[].duration - The duration of the timeline item.
 * @property {string} items[].title - The title of the timeline item.
 * @property {Array} items[].details - An array of details for the timeline item.
 * @property {Array} items[].tags - An array of tags for the timeline item.
 * @property {string} items[].icon - The name of the font awesome icon to use.
 */
function populateExp_Edu(items, id) {
  let mainContainer = document.getElementById(id);

  for (let i = 0; i < items.length; i++) {
    let spanTimelineSublabel = document.createElement("span");
    spanTimelineSublabel.className = "timeline-sublabel";
    spanTimelineSublabel.innerHTML = items[i].subtitle;

    let spanh2 = document.createElement("span");
    spanh2.innerHTML = items[i].duration;

    let h2TimelineLabel = document.createElement("h2");
    h2TimelineLabel.innerHTML = items[i].title;
    h2TimelineLabel.append(spanh2);

    let divTimelineLabel = document.createElement("div");
    divTimelineLabel.className = "timeline-label";
    divTimelineLabel.append(h2TimelineLabel);
    divTimelineLabel.append(spanTimelineSublabel);

    for (let j = 0; j < items[i].details.length; j++) {
      let pTimelineText = document.createElement("p");
      pTimelineText.className = "timeline-text";
    
      // Check if the detail is a URL
      const detail = items[i].details[j];
      if (detail.startsWith("http://") || detail.startsWith("https://")) {
        let link = document.createElement("a");
        link.href = detail;
        link.target = "_blank"; // Open in a new tab
        link.rel = "noopener noreferrer"; // For security
        link.textContent = detail; // Text of the link
        pTimelineText.appendChild(link);
      } else {
        pTimelineText.innerHTML = "&blacksquare; " + detail; // Treat as regular text
      }
    
      divTimelineLabel.append(pTimelineText);
    }

    let divTags = document.createElement("div");
    for (let j = 0; j < items[i].tags.length; j++) {
      let spanTags = document.createElement("span");
      spanTags.className = "badge badge-secondary";
      spanTags.innerHTML = items[i].tags[j];
      divTags.append(spanTags);
    }
    divTimelineLabel.append(divTags);

    let iFa = document.createElement("i");
    iFa.className = "fa fa-" + items[i].icon;

    let divTimelineIcon = document.createElement("div");
    divTimelineIcon.className = "timeline-icon color-2";
    divTimelineIcon.append(iFa);

    let divTimelineEntryInner = document.createElement("div");
    divTimelineEntryInner.className = "timeline-entry-inner";
    divTimelineEntryInner.append(divTimelineIcon);
    divTimelineEntryInner.append(divTimelineLabel);

    let article = document.createElement("article");
    article.className = "timeline-entry animate-box";
    article.append(divTimelineEntryInner);

    mainContainer.append(article);
  }

  let divTimelineIcon = document.createElement("div");
  divTimelineIcon.className = "timeline-icon color-2";

  let divTimelineEntryInner = document.createElement("div");
  divTimelineEntryInner.className = "timeline-entry-inner";
  divTimelineEntryInner.append(divTimelineIcon);

  let article = document.createElement("article");
  article.className = "timeline-entry begin animate-box";
  article.append(divTimelineEntryInner);

  mainContainer.append(article);
}

/**
 * Populate links in the specified footer section with provided data.
 *
 * @param {Array} items - Array of objects containing data for links
 * @param {String} id - Id of the footer section in which the links will be populated
 *
 * @return {undefined}
 */
function populateLinks(items, id) {
  let footer = document.getElementById(id);

  items.forEach(function (item) {
    if (item.label !== "copyright-text") {
      let span = document.createElement("span");
      span.className = "col";

      let p = document.createElement("p");
      p.className = "col-title";
      p.innerHTML = item.label;
      span.append(p);

      let nav = document.createElement("nav");
      nav.className = "col-list";

      let ul = document.createElement("ul");
      item.data.forEach(function (data) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        if (data.link) {
          a.href = data.link;
          a.target = "_blank";
        }
        if (data.func) {
          a.setAttribute("onclick", data.func);
        }
        a.innerHTML = data.text;

        li.append(a);
        ul.append(li);
      });
      nav.append(ul);
      span.append(nav);
      footer.append(span);
    }

    if (item.label === "copyright-text") {
      let div = document.createElement("div");
      div.className = "copyright-text no-print";
      item.data.forEach(function (copyright) {
        let p = document.createElement("p");
        p.innerHTML = copyright;
        div.append(p);
      });
      footer.append(div);
    }
  });
}

/**
 * Creates a new element with specified tag name and class name.
 *
 * @param {string} tagName - The tag name of the element.
 * @param {string} className - The class name of the element.
 *
 * @return {HTMLElement} The newly created element.
 */
function getElement(tagName, className) {
  let item = document.createElement(tagName);
  item.className = className;
  return item;
}


populateBio(bio, "bio");

populateSkills(skills, "skills");

fetchBlogsFromMedium(medium);
fetchGitConnectedData(gitConnected);

populateProjects(webProjects, "web-projects");
populateProjects(softwareProjects, "software-projects");
populateProjects(androidProjects, "android-projects");
populateProjects(freelanceProjects, "freelance-projects");

populateExp_Edu(experience, "experience");
populateExp_Edu(education, "education");

populateLinks(footer, "footer");
