export default function dotify(n) {
    var parts = n.toString();
    const ribuan = /\B(?=(\d{3})+(?!\d))/g;
    return parts.replace(ribuan, ".");
}
