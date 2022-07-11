
const size = {
    mobile: '600px',
    tablet: '900px',
  }
  const button = {
    size:{
      xl:{
        width: '348px',
        padding:' 17px 0',
        fontSize: '18px',
        lineHeight: '20px',
      }
    },
    theme :{
      default: {
        color:'#fff',
        backgroundColor:'var(--primary-primary)',
        hover:{
          backgroundColor:'var(--primary-p-800)'
        },
      },
      sub:{
        color:'var(--primary-primary);',
        backgroundColor:'var(--primary-p-100)',
        hover:{
          backgroundColor:'var(--primary-p-200)'
        }
      },
      line:{
        color:'var(--primary-primary)',
        border:'solid 1px var(--primary-primary)',
        hover:{
          backgroundColor:'var(--primary-p-100)'
        },
      },
      naver:{
        color:'#fff',
        backgroundColor:' #21c759',
      }
    }
  }
  const theme = {
    button,
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
  }


  export default theme
