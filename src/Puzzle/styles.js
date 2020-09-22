import { css } from "emotion";

const styles = css`
  @media (orientation: landscape) {
    display: flex;
    place-items: center;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(5, 50px);
    grid-template-rows: repeat(5, 50px);
    column-gap: 15px;
    row-gap: 15px;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (min-width: 800px) {
      grid-template-columns: repeat(5, 100px);
      grid-template-rows: repeat(5, 100px);
      column-gap: 20px;
      row-gap: 20px;
    }

    @media (min-width: 1600px) {
      grid-template-columns: repeat(5, 150px);
      grid-template-rows: repeat(5, 150px);
      column-gap: 25px;
      row-gap: 25px;
    }
  }

  li {
    background-color: #373737;
    border-radius: 5px;
    display: grid;
    place-items: center;
    font-size: 30px;
    cursor: default;
    transition: border 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    border: 3px solid #000;

    @media (min-width: 800px) {
      font-size: 50px;
    }

    @media (min-width: 1600px) {
      font-size: 60px;
    }

    &.possible {
      box-shadow: 0 0 0 3px #a1887f;
      :hover {
        background-color: #484848;
        cursor: pointer;
      }
    }

    &.current {
      box-shadow: 0 0 0 3px #2196f3;
    }

    &.filled,
    &.current {
      background-color: #616161;
    }
  }

  &.win li {
    box-shadow: 0 0 0 3px #8bc34a;
  }

  &.fail li {
    box-shadow: 0 0 0 3px #f44336;
  }

  .buttons {
    text-align: center;
    padding-top: 50px;

    button {
      padding: 10px;
      background-color: #212121;
      color: #fff;
      border: none;
      text-transform: uppercase;
      border-radius: 5px;
      cursor: pointer;
      display: block;
      margin: 0 auto 15px;
      width: 150px;

      :last-of-type {
        margin-bottom: 0;
      }

      :active,
      :hover {
        background-color: #373737;
      }

      :disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    @media (orientation: landscape) {
      padding-top: 0;
      padding-left: 50px;

      button {
        margin: 0 0 15px;
      }
    }

    @media (min-width: 800px) {
      button {
        padding: 20px;
      }
    }

    @media (min-width: 800px) and (orientation: landscape) {
      padding-left: 70px;
    }

    @media (min-width: 800px) and (orientation: portrait) {
      padding-top: 70px;

      button {
        display: initial;
        margin: 0 15px 0 0;

        :last-of-type {
          margin-right: 0;
        }
      }
    }

    @media (min-width: 1600px) {
      button {
        width: 200px;
      }
    }

    @media (min-width: 1600px) and (orientation: landscape) {
      padding-left: 100px;
    }

    @media (min-width: 1600px) and (orientation: portrait) {
      padding-top: 100px;
    }
  }
`;

export default styles;
