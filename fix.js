const fs = require('fs');
const path = require('path');

const srcDir = './src';
const componentsDir = path.join(srcDir, 'components');

const fixFile = (filePath) => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/import React, \{/g, 'import {');
  content = content.replace(/import React from 'react';\n/g, '');
  content = content.replace(/Github/g, 'GitBranch');
  fs.writeFileSync(filePath, content);
};

fixFile(path.join(srcDir, 'App.tsx'));
fixFile(path.join(componentsDir, 'Contact.tsx'));
fixFile(path.join(componentsDir, 'Hero.tsx'));
fixFile(path.join(componentsDir, 'Projects.tsx'));
fixFile(path.join(componentsDir, 'Header.tsx'));

const themePath = path.join(srcDir, 'ThemeContext.tsx');
let themeContent = fs.readFileSync(themePath, 'utf8');
themeContent = themeContent.replace(
  "import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';",
  "import { createContext, useContext, useState, useEffect } from 'react';\nimport type { ReactNode } from 'react';"
);
themeContent = themeContent.replace(/import React, /g, 'import ');
fs.writeFileSync(themePath, themeContent);

const pagesDir = path.join(srcDir, 'pages');
if (fs.existsSync(pagesDir)) {
  fs.rmSync(pagesDir, { recursive: true, force: true });
}
