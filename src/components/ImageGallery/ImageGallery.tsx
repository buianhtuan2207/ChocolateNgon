import React from 'react';
import './imageGallery.scss';

export default function ImageGallery() {
    return (
        <section className="image-gallery-section">
            <div className="row g-0 h-100">
                <div className="col-md-4 gallery-item">
                    <div className="img-wrapper">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhd8T5Ah-IFUxV1HHRJLkASemUpPgkZKIOSrBpKa5o_YhGIsyeHe7fO2zmvFlEYx9Dtu_7x9K9WE021COKjhfDvbPCddPa3iXi1KP1hJnx8oGutDmoihk4qycEzBEKu6prRXho06xgm3aNvYx-rqDfdqJvRykBMMzG40ynCilwcnCcY5ZJ_j75S-kXVehpnbC6rLfhqDajGPqgCZ_1S2wg4n4xgmwcNa1DV_igf33ttEjHcG8dNZaHqSqQDgybjkJUhR2xDMCY9rah" alt="Socola lỏng" />
                    </div>
                </div>
                <div className="col-md-4 gallery-item">
                    <div className="img-wrapper">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJgmtLeR0O1izTzO3S8_DfCKZq1ERwOLYb7AkKfVMaHFCJdmx0Q-0UJvW-3KLoafs1zqp7FS-ApevMGrmca4Q3E5l9DtgPju8q38tET53pfYWn1w5KCBdLgXwpOGG5cvYO58tTglbHvsQc09c7sGQN9CLovbrOBQcj5GNeDPdNIAY3NLWYOogcM36BMU1jn5lWwgbRt4k-IbQZu4hBmimWdC2TxDqWrCvqA3NIz2Uakk6LYv1cBUCo3T0jaZUK6eeXFZfyDdy-IZtw" alt="Vườn cacao" />
                    </div>
                </div>
                <div className="col-md-4 gallery-item">
                    <div className="img-wrapper">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuALZA8Hwn3V69hTD6ZSo__Z6QlBZwcioD-kjWnsjS7PZMQF-dp9Xeq074s25BxW1IF6LWuYZoV6g_kyra_McpH6VpQ4QiQkRSnLQpdsyigdMwhyEER5BCaCjUwgE86hUaI5EufoLWsTccxopRltTROrf2QPJ9qz2l93twf08Re37u7jsIZlyCJO8dZekp2c9VNM5HzGlC75KMLbEu5k3U4CYUnSEeeq1K9mKUPtz9N-Z94jnXYw7ciSkGVRsQXNzPbpPn8bb6uAA0WR" alt="Rang hạt" />
                    </div>
                </div>
            </div>
        </section>
    );
}