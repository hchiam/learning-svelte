<style>
  div,
  div:before,
  div:after {
    background: red;
    width: 10px;
    height: 10px;
  }
  div {
    transform: rotate(45deg);
  }
  div:before,
  div:after {
    content: "";
    border-radius: 100%;
  }
  div:before {
    position: absolute;
    transform: translateX(-50%);
  }
  div:after {
    position: absolute;
    transform: translateY(-50%);
  }
</style>

<div />
