const fs = require('fs');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT License"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"    
  } else if (license === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"    
  } else if (license === "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"    
  } else if (license === "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"    
  } else if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"    
  } else if (license === "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"    
  }

  else {
    return "License not provided"
  }
}


function generateMarkdown(data) {

  const builtLicense = renderLicenseBadge(data.license)
  // project title
    return  `# ${data.title}
## ${builtLicense}
## Description
${data.description}
## Table of Contents
- [Link](#link)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributors](#contributors)
- [Questions](#questions)
- [License](#license)
## Link
${data.applicationURL}
## Installation
${data.installationInstructions}
## Usage
${data.usage}
## Tests
${data.test}
## Contributors
${data.contributors}
## Questions
Please feel free to email any questions to ${data.email}. You can also visit my GitHub profile at https://github.com/${data.username}
## License
${data.license}`
;
}

module.exports = generateMarkdown;
