# Contributing Content

<!-- MDTOC maxdepth:6 firsth1:2 numbering:0 flatten:0 bullets:1 updateOnSave:1 -->

- [Creating a Show or Event](#creating-a-show-or-event)   
   - [Example structure](#example-structure)   
   - [Create the main content file](#create-the-main-content-file)   
      - [Set the frontmatter for the content file](#set-the-frontmatter-for-the-content-file)   
   - [Add Poster](#add-poster)   
   - [Add Hero](#add-hero)   
      - [Image](#image)   
      - [Headline](#headline)   
      - [Call to Action](#call-to-action)   
   - [Image gallery](#image-gallery)   
- [Creating a Sponsor](#creating-a-sponsor)   
   - [Create the main content file](#create-the-main-content-file)   
      - [Set the frontmatter for the content file](#set-the-frontmatter-for-the-content-file)   
   - [Add images for the sponsor](#add-images-for-the-sponsor)   
      - [Logo](#logo)   
- [Creating a Special Hero](#creating-a-special-hero)   
   - [Create the main content file](#create-the-main-content-file)   
      - [Set the frontmatter for the content file](#set-the-frontmatter-for-the-content-file)   
         - [Changing hero order](#changing-hero-order)   
   - [Add images](#add-images)   
- [Optimizing images](#optimizing-images)   

<!-- /MDTOC -->

The following is a fairly comprehensive guide for contributing new or changes to the site content. For guidance with contributing additional coding elements, like CSS and Javascript, see [CONTRIBUTING-DEV](CONTRIBUTING-DEV.md)

## Creating a Show or Event

This process is generally the same for Shows and Events but they are in two different directories, `show/` and `event/` respectively.

### Example structure

```
content/show/2016-2017
├── 30-day-mourning-period
│   ├── index.md
│   └── poster.jpg
├── calling-all-kates
│   ├── index.md
│   └── poster.jpg
├── happily-after-ever
│   ├── index.md
│   └── poster.jpg
├── home
│   ├── index.md
│   └── poster.jpg
└── row-after-row
    ├── index.md
    └── poster.jpg
```

```
content/event/2016-2017
├── annual-gala
│   ├── index.md
│   └── poster.jpg
├── escape-the-room
│   ├── index.md
│   └── poster.jpg
├── ike-and-julie-arnove-playoffs
│   ├── index.md
│   └── poster.jpg
├── miniplay-playwriting-competition
│   ├── index.md
│   └── poster.jpg
└── vintage-songs
    ├── index.md
    └── poster.jpg
```

### Create the main content file

```sh
$ hugo new show/[2016-2017]/[the-title-of-the-show]/index.md
```

Replace `[2016-2017]` with the season series to which you're adding the show. Replace `[the-title-of-the-show]` with the actual title of the show -- all lowercase with hyphens separating words.

You should get a result of something like this:

```sh
$ hugo new show/2015-2016/the-bull-the-moon-and-the-coronet-of-stars/index.md
/Users/marcguyer/dev/bppwrite.github.io/content/show/2015-2016/the-bull-the-moon-and-the-coronet-of-stars/index.md created
```

#### Set the frontmatter for the content file

Open the content file you created with your favorite text editor. The frontmatter is shown at the top of the content file delimited by `+++`. Each element of the frontmatter has a default (usually empty). It's your job to change the value of each element according to the show components. Here's a quick checklist:

1. Fix the capitalization of the `title`. Set the `subtitle` if applicable.
2. List the `showtimes` using the ISO 8601 datetime format (e.g., "2016-01-01T19:30:00")
3. List the OvationTix link to the tickets page for each showtime.
4. Set the `date` parameter equal to the first element of the list of `showtimes`
5. Set the `series` parameter equal to the season lable in format `<year>-<year>`
6. Set the `slot` parameter
7. Set the `genres` parameter to the effective genre or multiple genres if applicable
8. Set the cast and crew elements as they become known

Note: the frontmatter elements for an Event will be different than for a Show

### Add Poster

Create an image called `poster` of any valid web type (e.g., JPG, GIF, PNG, SVG) and place it in the same directory as the show. e.g., `show/2015-2016/the-bull-the-moon-and-the-coronet-of-stars/poster.png`.

### Add Hero

#### Image

Create an image called `hero` of any valid web type (e.g., JPG, GIF, PNG, SVG) and place it in the same directory as the show. e.g., `show/2015-2016/the-bull-the-moon-and-the-coronet-of-stars/hero.jpg`.

#### Headline

By default, the `title` and `subtitle` (if set) are used for the hero headline. You may override these with the frontmatter params `hero_title` and `hero_subtitle`. The override params are markdown enabled so you may choose to add emphasis to the text of the headline.

#### Call to Action

By default, the call to action is "Buy a Season Subscription". If a `tickets_run` frontmatter param is set, this is used for the target with the text of "Get Tickets". Lastly, if the `hero_call_to_action` and `hero_call_to_action_link` are both set, these values are used.

### Image gallery

```sh
$ mkdir -p show/[2016-2017]/[the-title-of-the-show]/gallery
```

Add all of the images related to this show in the `show/[2016-2017]/[the-title-of-the-show]/gallery` directory.

## Creating a Sponsor

### Create the main content file

```sh
$ hugo new sponsor/[the-name-of-the-sponsor]/index.md
```

Replace `[the-name-of-the-sponsor]` with the name of the sponsor -- all lowercase with hyphens separating words.

You should get a result of something like this:

```sh
$ hugo new sponsor/ivy-tech/index.md
/Users/marcguyer/dev/bppwrite.github.io/content/sponsor/ivy-tech/index.md created
```

#### Set the frontmatter for the content file

Open the content file you created with your favorite text editor. The frontmatter is shown at the top of the content file delimited by `+++`. Each element of the frontmatter has a default (usually empty). It's your job to change the value of each element according to the show components.

### Add images for the sponsor

#### Logo

Create an image called `logo` of any valid web type (e.g., JPG, GIF, PNG, SVG) and place it in the same directory as the show. e.g., `sponsor/ivy-tech/logo.png`.

## Creating a Special Hero

The next (or currently running) Show and the next Event are automatically included in the hero system on the homepage. You may choose to add special hero images and corresponding call-to-action.

### Create the main content file

```sh
$ hugo new special/[the-name-of-the-special]/index.md
```

Replace `[the-name-of-the-special]` with the name of the special -- all lowercase with hyphens separating words.

You should get a result of something like this:

```sh
$ hugo new special/new-works/index.md
/Users/marcguyer/dev/bppwrite.github.io/content/special/new-works/index.md created
```

#### Set the frontmatter for the content file

Open the content file you created with your favorite text editor. The frontmatter is shown at the top of the content file delimited by `+++`. Each element of the frontmatter has a default (usually empty). It's your job to change the value of each element according to the special hero components. The frontmatter options are generally the same as for a show or event.

##### Changing hero order

By default, the hero order is the following:

1. The next or currently running show (default `hero_weight` of "100")
2. The next or currently running event (default `hero_weight` of "200")
3. All special heros ordered chronologically by `date`. (default `hero_weight` of "300", "400", etc)

To override the order, specify a different `hero_weight`. For example, to force a new special hero to be first, set the `hero_weight` to "010". Note the leading zero. The heros are ordered by `hero_weight` alphabetically, not numerically. The value "010" comes _before_ "100" but "10" comes _after_ "100", and is why we must use the leading zero.

### Add images

A special hero may have multiple images chosen randomly for each visitor. Simply add at least one and potentially several images starting with `hero` of any valid web type (e.g., JPG, GIF, PNG, SVG) and place it in the same directory as the special hero content file. e.g., `special/new-works/hero.png`, `special/new-works/hero_2.png`, `special/new-works/hero_xyz.png`, etc.

## Optimizing images

| Purpose | Orientation | Dimensions | Compression |
| --- | --- | --- | --- |
| Hero | Landscape | 1920x1280px | 80% |
| Poster | Portrait | 720x1280px | 80% |
| Gallery | any | 1280x720px | 80% |
| Sponsor Logo | any | --- | --- |
