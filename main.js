function Iterator(items) {
    const _items = items;
    let index = 0;

    this.first = () => _items[0];
    this.next = () => (index++, _items[index]);
    this.current = () => _items[index];
    this.reset = () => index = 0;
}
