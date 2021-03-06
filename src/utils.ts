import { withInfo } from '@storybook/addon-info';
const wInfoStyle = {
  header: {
      div: {
          fontFamily: 'Leto',

      },
    h1: {
      marginRight: '20px',
      fontSize: '25px',
      display: 'inline',
      color: 'green'
    },
    body: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    h2: {
      display: 'inline',
      color: '#999',
    },
  },
  infoBody: {
    backgroundColor: '#eee',
    padding: '0px 5px',
    lineHeight: '2',
  },
};
export const wInfo = (text: string) =>
  withInfo({ inline: true, source: false, styles: wInfoStyle, text: text });