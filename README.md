# Nebuloid (Front-End)
This repository represents the Front-End of Nolan's *Nebuloid* portfolio project.
You can see my developer portfolio live at [https://nebuloid.dev/]()!

## Developers
### Setup
0. Run `git clone` on this repository, to copy it into a directory of your choice.
0. Enter into the directory using `cd`, so you are at the project's root.
0. Run `yarn` to install all yarn dependencies for the project.
0. Run `yarn dev` to start the frontend project and view it locally.

### End-of-Line Characters
Windows users will have to reconfigure their settings to use the correct end-of-line character encoding for this workspace.

See: https://stackoverflow.com/a/65628702.
Run the following commands *(this **will** delete your active changes)*:
```sh
git config core.autocrlf false
git rm --cached -r .
git reset --hard
```
