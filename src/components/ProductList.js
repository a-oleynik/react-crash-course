const styles = {
  List: {display: "flex", gap: "16px"}
}

export function ProductList(props) {
  return (
    <>
      <h2>Products</h2>
      <div style={styles.List}>{props.children}</div>
    </>
  );
}