<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="TA_Assesment_0"></a>TA Assesment</h1>
<p class="has-line-data" data-line-start="2" data-line-end="3">This project is a full stack currency converter application built using the MEAN stack. The frontend is developed in Angular with Angular Material and Bootstrap for a mobile-first, modern UI, while the backend is built with Node.js, Express, and TypeScript. The backend uses the <a href="https://freecurrencyapi.com/docs/">Free Currency API</a> to retrieve live exchange rates and maintains an in-memory conversion log.</p>
<h2 class="code-line" data-line-start=4 data-line-end=5 ><a id="Features_4"></a>Features</h2>
<ul>
<li class="has-line-data" data-line-start="6" data-line-end="7"><strong>Currency Conversion:</strong> Convert an amount from one currency to another using live exchange rates.</li>
<li class="has-line-data" data-line-start="7" data-line-end="8"><strong>Conversion History:</strong> Log all currency conversions with date and time, stored in-memory.</li>
<li class="has-line-data" data-line-start="8" data-line-end="9"><strong>Validation:</strong> Input validations with detailed error responses based on Free Currency API guidelines.</li>
<li class="has-line-data" data-line-start="9" data-line-end="10"><strong>Responsive UI:</strong> Uses Angular Material and Bootstrap to ensure a responsive, modern user interface.</li>
<li class="has-line-data" data-line-start="10" data-line-end="11"><strong>Docker Integration:</strong> Containerized application for consistent development and deployment.</li>
<li class="has-line-data" data-line-start="11" data-line-end="13"><strong>Environment Configuration:</strong> Centralized configuration using a <code>.env</code> file and a dedicated config module.</li>
</ul>
<h2 class="code-line" data-line-start=13 data-line-end=14 ><a id="Tech_Stack_13"></a>Tech Stack</h2>
<ul>
<li class="has-line-data" data-line-start="15" data-line-end="16"><strong>Frontend:</strong> Angular, Angular Material, Bootstrap</li>
<li class="has-line-data" data-line-start="16" data-line-end="17"><strong>Backend:</strong> Node.js, Express, TypeScript, Axios</li>
<li class="has-line-data" data-line-start="17" data-line-end="18"><strong>API:</strong> <a href="https://freecurrencyapi.com/docs/">Free Currency API</a></li>
<li class="has-line-data" data-line-start="18" data-line-end="20"><strong>Containerization:</strong> Docker, Docker Compose</li>
</ul>
<h2 class="code-line" data-line-start=20 data-line-end=21 ><a id="Prerequisites_20"></a>Prerequisites</h2>
<ul>
<li class="has-line-data" data-line-start="22" data-line-end="23">Node.js (v14 or later)</li>
<li class="has-line-data" data-line-start="23" data-line-end="24">Angular CLI</li>
<li class="has-line-data" data-line-start="24" data-line-end="25">Docker (optional, for containerized development)</li>
<li class="has-line-data" data-line-start="25" data-line-end="27">Git</li>
</ul>
<h2 class="code-line" data-line-start=27 data-line-end=28 ><a id="Installation_27"></a>Installation</h2>
<h3 class="code-line" data-line-start=29 data-line-end=30 ><a id="1_Clone_the_Repository_29"></a>1. Clone the Repository</h3>
<pre><code class="has-line-data" data-line-start="32" data-line-end="35">git clone https://github.com/yourusername/ta-assesment.git
cd ta-assesment
</code></pre>
<h3 class="code-line" data-line-start=35 data-line-end=36 ><a id="2_Setup_Environment_Variables_35"></a>2. Setup Environment Variables</h3>
<p class="has-line-data" data-line-start="36" data-line-end="37">Create a .env file in the backend folder with the following content (adjust values as needed):</p>
<pre><code class="has-line-data" data-line-start="38" data-line-end="43" class="language-env">PORT=3000
CURRENCY_API_KEY=your_api_key_here
CURRENCY_API_URL=https://api.freecurrencyapi.com/v1/latest
ALLOWED_CURRENCIES=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,IDR,ILS,INR,KRW,MXN,MYR,NZD,PHP,SGD,THB,ZAR
</code></pre>
<h3 class="code-line" data-line-start=43 data-line-end=44 ><a id="3_Install_Dependencies_43"></a>3. Install Dependencies</h3>
<p class="has-line-data" data-line-start="44" data-line-end="46"><strong>Backend</strong><br>
Navigate to the backend folder and install dependencies:</p>
<pre><code class="has-line-data" data-line-start="47" data-line-end="50">cd backend
npm install
</code></pre>
<p class="has-line-data" data-line-start="50" data-line-end="52"><strong>Frontend</strong><br>
Navigate to the frontend folder and install dependencies:</p>
<pre><code class="has-line-data" data-line-start="53" data-line-end="56">cd ../frontend
npm install
</code></pre>
<h3 class="code-line" data-line-start=56 data-line-end=57 ><a id="Running_the_Project_56"></a>Running the Project</h3>
<ol>
<li class="has-line-data" data-line-start="57" data-line-end="59">Running the Backend in Development<br>
For automatic reloading during development, use nodemon with TypeScript:</li>
</ol>
<pre><code class="has-line-data" data-line-start="60" data-line-end="62">npm run dev
</code></pre>
<ol start="2">
<li class="has-line-data" data-line-start="62" data-line-end="64">Running the Frontend<br>
Use the Angular CLI to start the development server with the proxy configuration:</li>
</ol>
<pre><code class="has-line-data" data-line-start="65" data-line-end="67">npm start
</code></pre>
<p class="has-line-data" data-line-start="67" data-line-end="68">This command runs ng serve --proxy-config proxy.conf.json, which routes API calls to the backend.</p>
<h2 class="code-line" data-line-start=68 data-line-end=69 ><a id="3_Docker_Setup_68"></a>3. Docker Setup</h2>
<p class="has-line-data" data-line-start="69" data-line-end="70">If you prefer to run the project in Docker containers, ensure you have Docker installed and use the provided docker-compose.yml at the project root.</p>
<p class="has-line-data" data-line-start="71" data-line-end="72"><strong>Build and Run with Docker Compose</strong></p>
<pre><code class="has-line-data" data-line-start="73" data-line-end="75">docker-compose up --build
</code></pre>
<p class="has-line-data" data-line-start="75" data-line-end="76">This command builds and starts both the backend and frontend services:</p>
<ul>
<li class="has-line-data" data-line-start="76" data-line-end="77">Backend: Runs on port 3000</li>
<li class="has-line-data" data-line-start="77" data-line-end="79">Frontend: Runs on port 80</li>
</ul>
<h2 class="code-line" data-line-start=79 data-line-end=80 ><a id="Folder_Structure_79"></a>Folder Structure</h2>
<p class="has-line-data" data-line-start="80" data-line-end="116">/ta-assesment<br>
├── backend<br>
│   ├── src<br>
│   │   ├── config.ts          // Loads environment variables<br>
│   │   ├── controllers<br>
│   │   │   └── conversion.controller.ts<br>
│   │   ├── routes<br>
│   │   │   └── conversion.routes.ts<br>
│   │   └── index.ts           // Entry point for Express server<br>
│   ├── package.json<br>
│   ├── tsconfig.json<br>
│   ├── nodemon.json           // Configuration for nodemon<br>
│   └── .env                 // Environment variables for backend<br>
├── frontend<br>
│   ├── src<br>
│   │   ├── app<br>
│   │   │   ├── components<br>
│   │   │   │   ├── conversion<br>
│   │   │   │   │   ├── conversion.component.ts<br>
│   │   │   │   │   ├── conversion.component.html<br>
│   │   │   │   │   └── conversion.component.css<br>
│   │   │   │   └── history<br>
│   │   │   │       ├── history.component.ts<br>
│   │   │   │       ├── history.component.html<br>
│   │   │   │       └── history.component.css<br>
│   │   │   ├── services<br>
│   │   │   │   └── currency.service.ts<br>
│   │   │   └── directives<br>
│   │   │       └── thousand-separator.directive.ts<br>
│   │   ├── proxy.conf.json     // Proxy configuration for API calls<br>
│   │   ├── styles.css<br>
│   │   └── index.html<br>
│   ├── angular.json<br>
│   └── package.json<br>
├── docker-compose.yml<br>
└── .gitignore</p>
<h2 class="code-line" data-line-start=117 data-line-end=118 ><a id="Git_Ignore_117"></a>Git Ignore</h2>
<p class="has-line-data" data-line-start="118" data-line-end="119">A sample .gitignore is provided at the root of the repository to exclude node modules, build files, and sensitive environment variables. See the .gitignore file for details.</p>
<h2 class="code-line" data-line-start=120 data-line-end=121 ><a id="Usage_120"></a>Usage</h2>
<ul>
<li class="has-line-data" data-line-start="121" data-line-end="122">Conversion: Use the Angular interface to convert currencies.</li>
<li class="has-line-data" data-line-start="122" data-line-end="123">History: View your conversion history in the Material table with a scrollbar.</li>
<li class="has-line-data" data-line-start="123" data-line-end="125">Input Fields: Numbers are formatted with thousand separators using a custom directive.</li>
</ul>
<h2 class="code-line" data-line-start=125 data-line-end=126 ><a id="Contributing_125"></a>Contributing</h2>
<p class="has-line-data" data-line-start="126" data-line-end="127">Feel free to fork this repository and submit pull requests. Please ensure your changes follow the existing code style.</p>
<h2 class="code-line" data-line-start=128 data-line-end=129 ><a id="License_128"></a>License</h2>
<p class="has-line-data" data-line-start="129" data-line-end="130">This project is licensed under the MIT License.</p>
<hr>
<p class="has-line-data" data-line-start="132" data-line-end="133">This README file should provide a clear and comprehensive guide to setting up, running, and understanding your project.</p>