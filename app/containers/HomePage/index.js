/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { motion } from 'framer-motion';
import messages from './messages';

import TableComponent from '../../components/TableComponent';

export default function HomePage() {
  const tableHeaders = [
    { title: 'Name', tag: 'name' },
    { title: 'Team', tag: 'team' },
    { title: 'Village', tag: 'village' },
    { title: 'Joined On', tag: 'joined' },
    { title: 'Figurine Cost', tag: 'figurineCost' },
  ];

  const [tableData, setTableData] = React.useState([
    {
      name: { value: 'Shikamaru Nara', type: 'string', symbol: null },
      team: { value: 10, type: 'number', symbol: null },
      village: { value: 'Konoha', type: 'string', symbol: null },
      joined: { value: new Date(), type: 'date', symbol: null },
      figurineCost: { value: 500, type: 'number', symbol: '$' },
    },

    {
      name: { value: 'Kakashi Hatake', type: 'string', symbol: null },
      team: { value: 7, type: 'number', symbol: null },
      village: { value: 'Konoha', type: 'string', symbol: null },
      joined: { value: new Date(), type: 'date', symbol: null },
      figurineCost: { value: 170, type: 'number', symbol: '$' },
    },

    {
      name: { value: 'Jiraya', type: 'string', symbol: null },
      team: { value: 10, type: 'number', symbol: null },
      village: { value: 'Konoha', type: 'string', symbol: null },
      joined: { value: new Date(), type: 'date', symbol: null },
      figurineCost: { value: 150, type: 'number', symbol: '$' },
    },
  ]);

  return (
    <div>
      <h1>
        {/* <FormattedMessage {...messages.header} /> */}
        <h3 className="glitch">
          <span aria-hidden="true">Home Page</span>
          Home Page
          <span aria-hidden="true">Home Page</span>
        </h3>
      </h1>

      <p className="para">
        Labore enim laboris laborum ullamco laborum laborum ea. Aliqua proident
        irure veniam est in ex aliquip ullamco qui exercitation est duis
        nostrud. Et et laboris dolor deserunt nostrud culpa et laboris dolor
        exercitation reprehenderit reprehenderit minim. Incididunt cupidatat
        sint sint fugiat qui consequat aliquip esse Lorem occaecat ex. Labore
        eiusmod Lorem nulla in sit ipsum duis minim minim non aliqua in irure
        mollit. Eu laborum officia ea ipsum minim nulla occaecat qui nostrud
        reprehenderit non aliqua. Cillum ullamco ut ex incididunt. Eu irure
        dolor labore laborum consequat cupidatat ea exercitation mollit enim
        nulla. Cupidatat fugiat voluptate ullamco veniam aliquip cupidatat amet
        culpa veniam proident incididunt fugiat mollit. Mollit dolore sunt esse
        commodo qui aute. Exercitation duis nulla exercitation esse commodo esse
        nostrud aliqua occaecat. Esse nostrud consequat nisi excepteur pariatur
        id ad Lorem non elit fugiat id culpa deserunt. Ipsum mollit nisi duis
        amet elit est sit quis laborum non. Irure officia Lorem ad aliquip ad
        qui ea aliquip exercitation. Voluptate duis quis elit nulla proident.
        Cillum nulla ea anim nulla. Enim et nulla enim deserunt ut consequat
        aliqua duis id et aliquip elit qui. Nulla laborum laboris culpa in anim
        in voluptate velit ullamco veniam aute Lorem proident.
      </p>

      <TableComponent
        className="pulse"
        tableHeaders={tableHeaders}
        tableData={tableData}
      />
    </div>
  );
}
