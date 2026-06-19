export default function Header() {
    return(
        <header className="bg-brand sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
                <div>Logo</div>

                <div>Search</div>

                <div>Cart</div>
            </div>
        </header>
    );
}