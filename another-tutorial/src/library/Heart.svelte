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
    z-index: 1;
    position: relative;
    top: -1.25rem;
    left: 1rem;
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
