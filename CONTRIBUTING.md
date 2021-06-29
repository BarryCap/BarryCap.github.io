# Contributing to [BarryCap.com](https://barrycap.com)
&emsp;As a start, I would like to thank everyone who is contributing or who wants to contribute to this repository.

&emsp;This is a project I made mostly alone, but if anyone wants to collaborate to this site, doing some little typo, design fixes or even art that they want to share, I would be very glad and open for some help and content.

---
## Commits
&emsp;I am not very strict at naming commits, so I will just exlain some fundamentals.

---
### Format
&emsp;The default format for commit names on this repository is:
```markdown
[verb] [edited] (of [nest] to [value] in [page])
```
&emsp;With `[verb]` indicating _the verb_; `[edited]` standing for _the name of the file or part of a file edited or added_; `[nest]` standing for _the element inside which the change is being applied to_; `[value]` being _the new value of the property that is changed_; and `[page]` standing for _the page or file in which the change is being applied to_. Everything that is inside parenthesis is not mandatory.
#### Example
&emsp;If the `body` text color is set to `#eee` in `styles.css`, the commit name should be:
```markdown
Set `color` of `body` to `#eee` in `styles.css`
```
---
### Starting with a verb
&emsp;Every commit should begin with a verb at the present time, explaining the kind of action that is being executed in the commit.
- If a new file, class, script etc. is created, the commit name should begin with `Add` or `Create`;
- If a file is modified, the commit name should begin with `Edit` or `Change`;
- If information in a file is updated, the commit name should begin with `Update`;
- If an issue, a typo etc. was fixed, the commit name should begin with `Fix`;
- If a style property or an attribute is changed, the commit name should begin with `Set`;
- If something is being deleted, the commit name should begin with `Remove` or `Delete`;
- If something is being improved, the commit name could begin with `Improve`;
- If a file is being renamed, the commit name could begin with `Rename`;
- If something is being changed for another, the commit name should begin with `Replace`;
- If a file or a part of a file is shortened or minified, the commit name should begin with `Minify`.
#### Examples
---
&emsp;If the file `CONTRIBUTING.md` is being added, the commit name could begin with or could to be:
```markdown
Add `CONTRIBUTING.md`
```
&emsp;If a property that is linked with the white theme is edited, the commit name would look like:
```markdown
Change white theme
```
---
### Followed by what has been edited or added
&emsp;The commit should include after the verb, the file name (surrounded by backticks if possible to be formated `like this` on GitHub) or something that has been changed.
#### Example
---
&emsp;If a script was added in `script.js` to change the random background animation in Random page, the commit name would look like:
```markdown
Add script to change background animation in Random page
```
---
### Splitted if too long
&emsp;To show in a good manner on all displays and viewing modes, the standard limit for the first line of commit names is at 50 (while it is at 72 for the any other line).
#### Example
---
&emsp;The commit name example above is too long (6 characters above the 50 limit), so it has to be splitted in two lines:
```markdown
Add script to change background animation
in Random page
```
&emsp;The commit name can be splitted before the anouncement of were the modifications are applying to, so generally before the word ‘in’.

---
### Including the number of files modified
&emsp;If numerous files that are being edited (e.g. a `meta` tag is changed in all HTML files), the commit name should include the number of files modified.
#### Example
---
&emsp;If the favicon is changed in all 56 HTML pages, the commit name would be:
```markdown
Change favicon in all 56 pages
```
---
### Pages' title capitalized
&emsp;The first letter of a mentioned page needs to be written in capital, generally followed by `page`.
#### Example
---
&emsp;If a white theme button is added in Random page, the commit name would be:
```markdown
Add white theme button in Random page
```
---
### Fixing issues
&emsp;If it is certain that an issue will be fixed when merging this commit to the master branch, the commit name can include the issue ID (beginning with `#`), preceded by `Fix`, with a white space between the two.
#### Example
---
&emsp;If the header CSS animation in Intro page is fixed, and if it closed the issue number 78, the commit name could look like:
```markdown
Fix header animation in Intro page Fix #78
```
---
### Multiple changes
&emsp;If multiple changes are done in the commit, they have to be separated in different lines.
#### Example
---
&emsp;If `CONTRIBUTING.md` is added and a typo was fixed in `README.md`, the commit name would be:
```markdown
Add `CONTRIBUTING.md`
Fix typo in `README.md`
```
---
### Adding description
&emsp;Additional information about what is being done in the commit can be added after a line break, not beginning with a capital letter.
#### Example
---
&emsp;If `README.md` is updated by adding link to Stack Overflow profile, the commit name could be:
```markdown
Update `README.md`
add link to Stack Overflow profile
```
---
### Not ending with a period
&emsp;No full stop or any other punctuation character has to be inserted at the end of the commit name.

---
### Updating version
&emsp;Every commit changes something to the site, and this can be seen with the version, that has to be updated with every commit (do not do it in changes that will be applied within a pull request, I will update it myself, in a commit where I have done something else, or in a ‘`Update version`’ commit). The version indicator can be found in the `code` block in the [About](https://barrycap.com/about) page (`/about.html`).

---
## Versioning
&emsp;The version of the site is represented in the below format:
```markdown
[major].[minor]+[commitNumber]
```
&emsp;The true commit number can be found in the [contributors table](https://github.com/BarryCap/BarryCap.github.io/graphs/contributors) of the repository, where all the commits count from every contributor have to be additionned. The commit number can also be found by calculating the number of commits found on the [repository home page](https://github.com/BarryCap/BarryCap.github.io) (e.g. 880 at the time this is written) plus 93.
#### Example
---
&emsp;The version of the site, with the commit introducing `CONTRIBUTING.md`, was:
```
1.6+974
```
&emsp;A new major version is introduced when the website completely changes its appearance. A new minor version is introduced when a big change was made to the website. Contributors will have to demand permission from [me](https://barrycap.com/about) to update the website to a major or minor version, or their modifications might be refused.

&emsp;Information about the different versions of the website can be found at [BarryCap.com/versions](https://barrycap.com/versions).

---
## Languages
&emsp;Most of the website is written in American English. I do not want to see things like ‘colour’, ‘licence’ or ‘realisations’ in the American English version of the website.

---
### English punctuation rules
&emsp;I have the habit to be a bit hard with myself on the punctuation marks. There are four points that I would like to explain.
#### The dash (**—**)
---
&emsp;The usage of dashes is often confused in many languages, where some people uses only the [en dash](https://unicode-table.com/en/2013/) (–), with or without spaces at its sides, while some are using both for different usage (e.g. en dash for lists, em dash as sentence separator), and there are even other kind of usage… So I will be clear. There is only **one type of dash used in English texts**, and that is the [em dash](https://unicode-table.com/en/2014/) (—). It has to be used **without spaces** after nor before.
#### Example
---
&emsp;_The train was about to leave—travelers were jostling for a seat._
#### Horizontal ellipsis (**…**)
---
&emsp;The usage of [horizontal ellipsis](https://unicode-table.com/en/2026/) is also quite different depending on websites, people etc., some time used as ‘…’ (one character), ‘...’ (three periods) or ‘. . .’ (three periods spaced) The rule on [BarryCap.com](https://barrycap.com) is simple: each time horizontal ellipsis have to be used, the Unicode character has to be preferred.
#### Quotation marks (**‘**, **’**, **“** and **”**)
---
&emsp;Some are using those: ' ([apostrophe](https://unicode-table.com/en/0027/), both the same at each end), while others: " ([quotation mark](https://unicode-table.com/en/0022/), both the same at each end), some more experimented: “ and ” ([left double quotation mark](https://unicode-table.com/en/201C/) and [right double quotation mark](https://unicode-table.com/en/201D/)) or ‘ and ’ ([left single quotation mark](https://unicode-table.com/en/2018/) and [right single quotation mark](https://unicode-table.com/en/2019/)). The rule on [BarryCap.com](https://barrycap.com) is to use **single quotation marks**, different for each end (‘ and ’), and if there is a need for putting quotation marks inside of quotation marks, the characters used will be **double quotation marks** (“ and ”), also different at each end.
#### Spaces before punctuation marks (**:**, **;**, **?**, **!** and **…**)
---
&emsp;This is generally respected: **no space before [colons](https://unicode-table.com/en/003A/), [semicolons](https://unicode-table.com/en/003B/), [exclamation marks](https://unicode-table.com/en/0021/), [question marks](https://unicode-table.com/en/003F/) and [horizontal ellipsis](https://unicode-table.com/en/2026/)** in English, and most other languages.

---
### French punctuation rules
&emsp;French is a language in which punction marks usage often differs from other languages. The thing that is important to French punctuation is the [no-break space](https://unicode-table.com/en/00A0/), that needs to be placed before or after punctuation marks.
#### The dash (**–** and **—**)
---
&emsp;The dash used inside sentences will always be the [en dash](https://unicode-table.com/en/2013/) (–), surrounded by regular spaces, unless it is used like parenthesis, framing a part of text in which case a [no-break space](https://unicode-table.com/en/00A0/) (`&nbsp;` in HTML) has to be inserted inside the part of the sentence surrounded by [en dashs](https://unicode-table.com/en/2013/).

&emsp;As for dialogues, the dash used will be an [em dash](https://unicode-table.com/en/2014/), followed by a [no-break space](https://unicode-table.com/en/00A0/)
#### Example
---
&emsp;Paragraph:

&emsp;_Le train s'apprêtait à partir <!--regular space-->– <!--regular space-->les voyageurs se bousculaient pour une place. Il faisait beau <!--regular space-->–&nbsp;c'était le début de l'automne&nbsp;– <!--regular space-->et les feuilles virevoltaient en tous sens._

&emsp;HTML code (with comments):
```html
&emsp;Le train s'apprêtait à partir <!--regular space-->– <!--regular space-->les voyageurs se bousculaient pour une place. Il faisait beau <!--regular space-->–&nbsp;c'était le début de l'automne&nbsp;– <!--regular space-->et les feuilles virevoltaient en tous sens.
```
#### Horizontal ellipsis (**…**)
---
&emsp;The usage for [horizontal ellipsis](https://unicode-table.com/en/2026/) is the same for French as it is [in English](#horizontal-ellipsis-): the Unicode character (…) has to be used instead of three periods, and a space must not be inserted before the punctuation mark.
#### Quotation marks (**«** and **»**)
---
&emsp;For french texts, a [left guillemet](https://unicode-table.com/en/00AB/) («, at the beginning) and a [right guillemet](https://unicode-table.com/en/00BB/) (», at the end) need to be used with a [no-break space](https://unicode-table.com/en/00A0/) (`&nbsp;` in HTML) in the inside, instead of common [quotation mark](https://unicode-table.com/en/0022/) (") or any other punctuation mark.
#### Spaces before punctuation marks (**:**, **;**, **?** and **!**)
---
&emsp;The rule is not always respected in French: **always add a [no-break space](https://unicode-table.com/en/00A0/) before [colons](https://unicode-table.com/en/003A/), [semicolons](https://unicode-table.com/en/003B/), [exclamation marks](https://unicode-table.com/en/0021/) and [question marks](https://unicode-table.com/en/003F/)**.

---
### No ugly library
&emsp;I know the word ‘ugly’ is not very rational, but what I want to say is that about coding languages, the site must be cleanest as possible, **not using any HTML, CSS, JavaScript library nor preprocessor for doing things that could be done without one**. The following libraries must not take place on this project: Pug—Halm—Slim—Stylus—SASS—SCSS—Less—PostCSS—jQuery—Babel—CofeeScript—TypeScript—LiveScript. I must have forgotten some of it—but anyway,  if anyone wants to use an open-source library on this website, they have to demand permission.

<br>

||||
|:-:|:-:|:-:|
|[Website](https://barrycap.com)|[Readme](README.md)|[License](LICENSE)|
||||
