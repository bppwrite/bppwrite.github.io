## Creating a Show

### Create the main content file

```sh
$ hugo new show/[2016-2017]/[the-title-of-the-show].md
```

Replace `[2016-2017]` with the season series to which you're adding the show. Replace `[the-title-of-the-show]` with the actual title of the show -- all lowercase with hyphens separating words.

You should get a result of something like this:

```sh
$ hugo new show/2015-2016/the-bull-the-moon-and-the-coronet-of-stars.md
/Users/marcguyer/dev/bppwrite.github.io/content/show/2015-2016/the-bull-the-moon-and-the-coronet-of-stars.md created
```

#### Set the frontmatter for the content file

Open the content file you created with your favorite text editor. The frontmatter is shown at the top of the content file delimited by `+++`. Each element of the frontmatter has a default (usually empty). It's your job to change the value of each element according to the show components. Here's a quick checklist:

1. Fix the capitalization of the `title`. Set the `subtitle` if applicable
2. List the `showtimes` using the ISO 8601 datetime format
3. Set `showtimes_human` to something like "October 28-29, November 4-6"
4. Set the `date` parameter equal to the first element of the list of `showtimes`
5. Set the `series` parameter equal to the season lable in format `<year>-<year>`
6. Set the `slot` parameter
7. Set the `genres` parameter to the effective genre or multiple genres if applicable
8. Set the cast and crew elements as they become known

### Add images for the show

#### Create a directory for the images

```sh
$ mkdir -p show/[2016-2017]/[the-title-of-the-show]/gallery
```

The directory name, `[the-title-of-the-show]`, must match the name of the show you created previously.

Add all of the images related to this show in the `show/[2016-2017]/[the-title-of-the-show]/gallery` directory.

## Creating a Sponsor

### Create the main content file

```sh
hugo new sponsor/[the-name-of-the-sponsor].md
```

Replace `[the-name-of-the-sponsor]` with the name of the sponsor -- all lowercase with hyphens separating words.

You should get a result of something like this:

```sh
$ hugo new sponsor/ivy-tech.md
/Users/marcguyer/dev/bppwrite.github.io/content/sponsor/ivy-tech.md created
```

#### Set the frontmatter for the content file

Open the content file you created with your favorite text editor. The frontmatter is shown at the top of the content file delimited by `+++`. Each element of the frontmatter has a default (usually empty). It's your job to change the value of each element according to the show components.

### Add images for the sponsor

#### Create a directory for the images

```sh
$ mkdir -p sponsor/[this-name-of-the-sponsor]
```

The directory name, `[the-name-of-the-sponsor]`, must match the name of the sponsor you created previously.

Add the logo to the `sponsor/[the-name-of-the-sponsor]` directory and name it `logo.jpg`.
