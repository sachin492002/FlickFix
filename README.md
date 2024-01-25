<p align="center">
  <img src="https://raw.githubusercontent.com/sachin492002/StreamJet/master/public/homegrid/hero.webp" width="100%" />
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/sachin492002/StreamJet/master/app/icon.png" width="100" />
</p>
<p align="center">
    <h1 align="center">STREAMJET</h1>
</p>
<p align="center">
    <em>

</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/sachin492002/StreamJet?style=default&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/sachin492002/StreamJet?style=default&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/sachin492002/StreamJet?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/sachin492002/StreamJet?style=default&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [Screenshots](#-screenshots)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running StreamJet](#-running-StreamJet)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---

## 📍 Overview

This Movie Streaming App, built with Next.js, provides a seamless platform for users to explore and enjoy movie trailers. It offers an immersive experience for movie enthusiasts to discover new releases, popular titles, and watch trailers on-demand.

---

## 📦 Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | The project is built using Next.JS. Next.JS also supports server-side-rendering  built on React . |
| 🔩 | **Code Quality**  | The codebase is well-structured and follows best practices. It utilizes TypeScript for type safety and has consistent coding style. |
| 🎞📣🎞| **Browse Movies** | Explore a diverse collection of movies genres, top rated movies, latest realeases. |
| 🎬|**Search Functionality**| Easily find specific movies using the search feature.|
| 🎥|**WishList**| Save movies to a watchlist for future viewing.|
| 💎|**Responsive Design**| Enjoy a consistent and engaging experience across various devices.
| 🔌 | **Integrations**  | The project integrates with external api's, and react libraries. |
| 🧩 | **Modularity**    | The codebase appears to be modular and reusable, with components like `MovieCard.tsx`, `CastCard.tsx`, and `SliderComponent.tsx` providing clear separation of concerns. |
| ⚡️  | **Performance**   | The projects follows best practices for better Search Engine Optimization. It achieves great core web-vitals scores throughout the project. |
| 📦 | **Dependencies**  | The project has dependencies on libraries such as react-slick, tailwind, redux-toolkit. |

---
## 📸 Screenshots

<details closed><summary>Home Page</summary>

![Home Page](https://raw.githubusercontent.com/sachin492002/StreamJet/master/screenshots/homepage.webp)

</details>

<details closed><summary>Movie Page</summary>

![Movie Page](https://raw.githubusercontent.com/sachin492002/StreamJet/master/screenshots/moviepage.webp)


</details>


<details closed><summary>Search Page</summary>

![Search Page](https://raw.githubusercontent.com/sachin492002/StreamJet/master/screenshots/searchpage.webp)

</details>

<details closed><summary>Subscription Page</summary>

![Subscription Page](https://raw.githubusercontent.com/sachin492002/StreamJet/master/screenshots/subscriptionpage.webp)


</details>

<details closed><summary>Support Page</summary>

![Support Page](https://raw.githubusercontent.com/sachin492002/StreamJet/master/screenshots/supportpage.webp)

</details>


##  Repository Structure

```sh
└── StreamJet/
    ├── app
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── Movies
    │   │   └── page.tsx
    │   ├── not-found.tsx
    │   ├── page.tsx
    │   ├── search
    │   │   └── page.tsx
    │   ├── StoreProvider.tsx
    │   ├── subscription
    │   │   └── page.tsx
    │   ├── support
    │   │   ├── page.tsx
    │   │   └── QuestionCard.tsx
    │   └── watch
    │       ├── genre
    │       └── movie
    ├── components
    │   ├── Footer.tsx
    │   ├── Genre
    │   │   └── GenrePage.tsx
    │   ├── GenreCard.tsx
    │   ├── Homepage
    │   │   ├── Category.tsx
    │   │   ├── Devices.tsx
    │   │   ├── HomePage.tsx
    │   │   └── WatchNow.tsx
    │   ├── MovieComponents
    │   │   ├── CastCard.tsx
    │   │   ├── MovieCard.tsx
    │   │   └── MoviePage.tsx
    │   ├── Navbar
    │   │   └── Navbar.tsx
    │   ├── Slider
    │   │   ├── BannerSlider.tsx
    │   │   ├── SliderButtons.tsx
    │   │   └── SliderComponent.tsx
    │   └── utils.tsx
    ├── lib
    │   ├── hooks.ts
    │   └── store
    │       ├── movieSlice.tsx
    │       ├── service.tsx
    │       └── store.tsx
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   ├── fonts
    │   │   ├── Horror.ttf
    │   │   └── Misto.ttf
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── types
        └── index.ts
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                           | Summary                         |
| ---                                                                                            | ---                             |
| [.gitignore](https://github.com/sachin492002/StreamJet/blob/master/.gitignore)                 | <code>Manages the files and directories to be ignored by Git version control. </code> |
| [next.config.js](https://github.com/sachin492002/StreamJet/blob/master/next.config.js)         | <code>Configuration file for Next.js, likely containing settings for your Next.js application.</code> |
| [package-lock.json](https://github.com/sachin492002/StreamJet/blob/master/package-lock.json)   | <code>Auto-generated file specifying the exact version of each installed npm package.</code> |
| [package.json](https://github.com/sachin492002/StreamJet/blob/master/package.json)             | <code>Manifest file for Node.js projects, containing project metadata and dependencies.</code> |
| [tailwind.config.ts](https://github.com/sachin492002/StreamJet/blob/master/tailwind.config.ts) | <code>Configuration file for Tailwind CSS, a utility-first CSS framework.</code> |
</details>


<details closed><summary>app</summary>

| File                                                                                             | Summary                         |
| ---                                                                                              | ---                             
| [layout.tsx](https://github.com/sachin492002/StreamJet/blob/master/app\layout.tsx)               | <code>Layout component that provides a consistent structure for pages.</code> |
| [not-found.tsx](https://github.com/sachin492002/StreamJet/blob/master/app\not-found.tsx)         | <code>Component or page for handling 404 errors.</code> |
| [page.tsx](https://github.com/sachin492002/StreamJet/blob/master/app\page.tsx)                   | <code>Root page for the application</code> |
| [StoreProvider.tsx](https://github.com/sachin492002/StreamJet/blob/master/app\StoreProvider.tsx) | <code>Component responsible for providing application state using Redux.</code> |
</details>

<details closed><summary>app.Movies</summary>

| File                                                                                  | Summary                         |
| ---                                                                                   | ---                             |
| [page.tsx](https://github.com/sachin492002/StreamJet/blob/master/app\Movies\page.tsx) | <code>This page shows the main movie page with trending, latest, top rated and genres section.</code> |

</details>

<details closed><summary>app.search</summary>

| File                                                                                  | Summary                         |
| ---                                                                                   | ---                             |
| [page.tsx](https://github.com/sachin492002/StreamJet/blob/master/app\search\page.tsx) | <code>This components shows the results for the search query.</code> |

</details>

<details closed><summary>app.subscription</summary>

| File                                                                                        | Summary                         |
| ---                                                                                         | ---                             |
| [page.tsx](https://github.com/sachin492002/StreamJet/blob/master/app\subscription\page.tsx) | <code>This page shows the details related to the subscription</code> |

</details>

<details closed><summary>app.support</summary>

| File                                                                                                   | Summary                         |
| ---                                                                                                    | ---                             |
| [page.tsx](https://github.com/sachin492002/StreamJet/blob/master/app\support\page.tsx)                 | <code>This  renders the support page for the web application </code> |
| [QuestionCard.tsx](https://github.com/sachin492002/StreamJet/blob/master/app\support\QuestionCard.tsx) | <code>Faq Card Component</code> |

</details>

<details closed><summary>app.watch.genre.[slug]</summary>

| File                                                                                              | Summary                         |
| ---                                                                                               | ---                             |
| [page.tsx](https://github.com/sachin492002/StreamJet/blob/master/app\watch\genre\[slug]\page.tsx) | <code>This page contains the code for the genres page which will show all the movies with respective genre. </code> |

</details>

<details closed><summary>app.watch.movie.[slug]</summary>

| File                                                                                              | Summary                         |
| ---                                                                                               | ---                             |
| [page.tsx](https://github.com/sachin492002/StreamJet/blob/master/app\watch\movie\[slug]\page.tsx) | <code>This is movie page for a specific movie with the details of the movie like cast, crew, director etc</code> |

</details>

<details closed><summary>components</summary>

| File                                                                                            | Summary                         |
| ---                                                                                             | ---                             |
| [Footer.tsx](https://github.com/sachin492002/StreamJet/blob/master/components\Footer.tsx)       | <code>Component for the application footer.</code> |
| [GenreCard.tsx](https://github.com/sachin492002/StreamJet/blob/master/components\GenreCard.tsx) | <code>Component for displaying information about a genre in other components.</code> |
| [utils.tsx](https://github.com/sachin492002/StreamJet/blob/master/components\utils.tsx)         | <code>Utility functions for components.</code> |

</details>

<details closed><summary>components.Genre</summary>

| File                                                                                                  | Summary                         |
| ---                                                                                                   | ---                             |
| [GenrePage.tsx](https://github.com/sachin492002/StreamJet/blob/master/components\Genre\GenrePage.tsx) | <code>Component for displaying detailed information about a genre.</code> |

</details>

<details closed><summary>components.Homepage</summary>

| File                                                                                                   | Summary                         |
| ---                                                                                                    | ---                             |
| [Category.tsx](https://github.com/sachin492002/StreamJet/blob/master/components\Homepage\Category.tsx) | <code>Component for displaying content genres on the homepage.</code> |
| [Devices.tsx](https://github.com/sachin492002/StreamJet/blob/master/components\Homepage\Devices.tsx)   | <code>Component for displaying supported devices.</code> |
| [HomePage.tsx](https://github.com/sachin492002/StreamJet/blob/master/components\Homepage\HomePage.tsx) | <code>Component for the main homepage.</code> |
| [WatchNow.tsx](https://github.com/sachin492002/StreamJet/blob/master/components\Homepage\WatchNow.tsx) | <code>Component for prompting users to watch content.</code> |

</details>

<details closed><summary>components.MovieComponents</summary>

| File                                                                                                            | Summary                         |
| ---                                                                                                             | ---                             |
| [CastCard.tsx](https://github.com/sachin492002/StreamJet/blob/master/components\MovieComponents\CastCard.tsx)   | <code>Component for displaying information about the cast.</code> |
| [MovieCard.tsx](https://github.com/sachin492002/StreamJet/blob/master/components\MovieComponents\MovieCard.tsx) | <code>Component for displaying information about a movie.</code> |
| [MoviePage.tsx](https://github.com/sachin492002/StreamJet/blob/master/components\MovieComponents\MoviePage.tsx) | <code>Component for displaying detailed information about a movie.</code> |

</details>

<details closed><summary>components.Navbar</summary>

| File                                                                                             | Summary                         |
| ---                                                                                              | ---                             |
| [Navbar.tsx](https://github.com/sachin492002/StreamJet/blob/master/components\Navbar\Navbar.tsx) | <code>Component for the application navbar.</code> |

</details>

<details closed><summary>components.Slider</summary>

| File                                                                                                               | Summary                         |
| ---                                                                                                                | ---                             |
| [BannerSlider.tsx](https://github.com/sachin492002/StreamJet/blob/master/components\Slider\BannerSlider.tsx)       | <code>Component for displaying a banner slider.</code> |
| [SliderButtons.tsx](https://github.com/sachin492002/StreamJet/blob/master/components\Slider\SliderButtons.tsx)     | <code>Component for navigation buttons in a slider.</code> |
| [SliderComponent.tsx](https://github.com/sachin492002/StreamJet/blob/master/components\Slider\SliderComponent.tsx) | <code>Generic component for displaying a slider.</code> |
</details>
---

##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **TypeScript**: `npm install -g typescript`
* **Node.js**: `npm install -g node`
###  Installation

1. Clone the StreamJet repository:

```sh
git clone https://github.com/sachin492002/StreamJet
```

2. Change to the project directory:

```sh
cd StreamJet
```

3. Install the dependencies:

```sh
npm install
```

###  Running StreamJet

Use the following command to run StreamJet:

```sh
npm run dev
```

###  Tests

To execute tests, run:

```sh
npm test
```

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github/sachin492002/StreamJet/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github/sachin492002/StreamJet/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github/sachin492002/StreamJet/issues)**: Submit bugs found or log feature requests for Streamjet.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/sachin492002/StreamJet
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
