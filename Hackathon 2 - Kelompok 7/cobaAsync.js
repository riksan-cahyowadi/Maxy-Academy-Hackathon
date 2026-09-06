// --- JANGAN DIUBAH (Fungsi simulasi dari library lain) ---

function cekKeServer(id) {
  return new Promise((resolve, reject) => {
    if (id === 100) {
      resolve({ status: "PAID", total: 50000 });
    } else {
      reject("ID Transaksi tidak ditemukan / Invalid!");
    }
  });
}

// ---------------------------------------------------------

// === TULIS KODE JAWABANMU DI BAWAH INI ===

async function prosesPembayaran(idTransaksi) {
  // ... tulis jawabanmu di sini ...

  try {
    const result = await cekKeServer(idTransaksi);

    console.log("Pembayaran berhasil!");
  } catch (error) {
    console.log("Gagal memproses pembayaran ID Transaksi:", idTransaksi);
  }
}

// === CARA MENGUJI KODINGANMU ===

// Coba panggil dengan ID yang benar (100) dan ID yang salah (999)

prosesPembayaran(100); // Harus masuk ke try (Berhasil)

prosesPembayaran(999); // Harus masuk ke catch (Gagal)
