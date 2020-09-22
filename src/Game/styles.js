import { css } from "emotion";

const styles = css`
  max-width: 800px;
  padding: 0 20px 20px;

  p:last-of-type {
    margin-bottom: 0;
  }

  .modes {
    display: flex;
    padding-top: 26px;

    .mode {
      cursor: pointer;
      border-radius: 5px;
      padding: 20px;
      margin-right: 20px;
      display: block;
      background-color: #333333;
      width: 100%;
      text-align: center;

      :last-of-type {
        margin-right: 0;
      }

      .heading {
        font-weight: bold;
        font-size: 24px;
      }

      h2 {
        margin: 0;
        text-align: center;
      }

      ul {
        list-style: none;
        margin: 20px 0 30px;
        padding: 0;
      }

      li {
        margin: 0 0 10px;
        padding: 0;

        :last-of-type {
          margin-bottom: 0;
        }
      }

      button {
        padding: 10px;
        background-color: #484848;
        color: #fff;
        border: none;
        text-transform: uppercase;
        border-radius: 5px;
        display: block;
        margin: 0 auto 15px;
        width: 150px;

        :last-of-type {
          margin-bottom: 0;
        }
      }

      :active {
        box-shadow: 0 0 0 4px #616161;

        button {
          cursor: pointer;
          background-color: #616161;
        }
      }

      @media (hover) {
        /* Prevent box from being highlighted after starting new game */
        :hover {
          box-shadow: 0 0 0 4px #616161;

          button {
            cursor: pointer;
            background-color: #616161;
          }
        }
      }
    }

    @media (max-width: 600px) {
      display: block;

      .mode {
        width: 100%;
        margin-right: 0;
        margin-bottom: 20px;

        :last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export default styles;
