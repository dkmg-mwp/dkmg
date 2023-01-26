## Code guide

* Mobile first - Dimensions: iPhone 8

* All new TSX files start with rafce 
* Camelcase to name TSX files
* Delete React imports if not used
* Single quotes

* The standard for all functions are arrow key functions 
``
const functionName = async () => {
       // some code
    };
``

* Always create a new branch based on the main branch
* To create a branch
``
git switch -C <branch name>
``
* To delete a branch
``
git branch -D <branch name>
``
* All styled components should be imported as the following
``
import * as Styled from ''
``