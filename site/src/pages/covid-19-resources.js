import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const links = [
  ['Johns Hopkins University Dashboard', 'https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6'],
  ['WHO – Coronavirus disease 2019', 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019'],
  ['Report of the WHO-China Joint Mission on Coronavirus Disease 2019 (COVID-19) ', 'https://www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf'],
  ['/r/Coronavirus', 'https://www.reddit.com/r/Coronavirus/'],
  ['/r/COVID19', 'https://www.reddit.com/r/COVID19/'],
  ['1Point3Acres', 'https://coronavirus.1point3acres.com/en'],
  ['Oregon Health Authority - COVID-19 Updates', 'https://govstatus.egov.com/OR-OHA-COVID-19'],
  ['worldometer', 'https://www.worldometers.info/coronavirus/'],
  ['COVID-19 Scenarios', 'https://neherlab.org/covid19/'],
  ['The COVID Tracking Project', 'https://covidtracking.com/data/'],
  ['NYT Dataset', 'https://github.com/nytimes/covid-19-data']
]

export default ({ data }) => (
  <Layout>
    <SEO title="COVID-19 Resources" />
    <h1>COVID-19 Resources</h1>
    <ul>
      {links.map(([name, url]) => (
        <li>
          <a href={url}>{name}</a>
        </li>
      ))}
    </ul>
  </Layout>
)
