<template>
  <section class="c-layanan">
    <div class="c-head">
      <div class="c-head__body">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20">
            <h2 class="title">penunjang</h2>
            <h6 class="subtitle">RSUD Labuang Baji Makassar</h6>
          </el-col>
        </el-row>
      </div>
    </div>

    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="24" :md="20">
        <div class="c-breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">beranda</el-breadcrumb-item>
            <el-breadcrumb-item>layanan</el-breadcrumb-item>
            <el-breadcrumb-item>penunjang</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="c-layanan--body">
          <h2 class="title">Penunjang Medik</h2>
          <el-collapse v-model="medik" accordion>
            <el-collapse-item title="Lab Patologi Klinik (PK)" name="1">
              <div>
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
              </div>
            </el-collapse-item>

            <el-collapse-item title="Lab Patologi Anatomi (PA)" name="2">
              <div>
                Tidak ada deskripsi
              </div>
            </el-collapse-item>

            <el-collapse-item title="Radiologi" name="3">
              <p>
                Instalasi Radiologi merupakan salah satu instalasi penunjang medis yang memberikan layanan
                pemeriksaan radiologi dengan hasil pemeriksaan berupa foto/ gambar untuk membantu dokter yang
                merawat pasien dalam penegakan diagnosis. Instalasi radiologi RSUD. Labuang Baji Makassar berada di
                bawah penanganan para dokter ahli dan teknisi yang berpengalaman serta dilengkapi dengan fasilitas
                canggih dan modern yang mampu menunjang kebutuhan diagnostik seluruh bidang spesialistis.
              </p>
              <p>
                RSUD. Labuang Baji Makassar menyediakan pemeriksaan Radiologi yakni :
              </p>
              <ol type="1">
                <li>Thorax</li>
                <li>Sinus Paranasal PA / Lateral / Water’s</li>
                <li>Kepala AP/LAT</li>
                <li>Rahang / Gigi</li>
                <li>Mastoid</li>
                <li>Cervical AP / LAT</li>
                <li>Cervical Oblik AP / LAT</li>
                <li>Thoracal AP / LAT</li>
                <li>Thoracolumbal AP / LAT</li>
                <li>Lumbosacral AP / LAT</li>
                <li>Pelvis</li>
                <li>Sendi bahu</li>
                <li>Clavicula</li>
                <li>HUmenus AP / LAT</li>
                <li>Sendi Siku AP / LAT</li>
                <li>Antebrachii AP / LAT</li>
                <li>Pergelangan Tangan AP / LAT</li>
                <li>Manus AP / LAT</li>
                <li>Femur AP / LAT</li>
                <li>Sendi Lutut AP / LAT</li>
                <li>Cruris AP / LAT</li>
                <li>Pergelangan Kaki AP / LAT</li>
                <li>Pedis AP / LAT</li>
                <li>BNO</li>
                <li>Invertogram</li>
                <li>BNO – IVP</li>
                <li>Uretrografi</li>
                <li>Uretrosistography</li>
                <li>Oesophagography</li>
                <li>MD</li>
                <li>Colon Inloop</li>
                <li>Fistulografi</li>
                <li>Histerosalfingografi</li>
                <li>USG :
                  <ul>
                    <li>Abdoemen</li>
                    <li>Ginekologi</li>
                    <li>Urologi</li>
                    <li>Leher</li>
                    <li>Thorax</li>
                    <li>Mamma</li>
                    <li>Vaskuler</li>
                    <li>Testis</li>
                  </ul>
                </li>

                <li>ST-SCAN :
                  <ul>
                    <li>Kepala</li>
                    <li>Mastoid</li>
                    <li>Sinus Paranasal</li>
                    <li>Vertebrae :
                      <ul>
                        <li>Leher / Cervical</li>
                        <li>Touracal</li>
                        <li>Thoraco Lumbal</li>
                        <li>Lumbo Sacral</li>
                      </ul>
                    </li>
                    <li>Pelvis / Coxae</li>
                    <li>Urology</li>
                    <li>Gynecology</li>
                  </ul>
                </li>
              </ol>
            </el-collapse-item>

            <el-collapse-item title="Farmasi" name="4">
              <div>
                Tidak ada deskripsi
              </div>
            </el-collapse-item>

            <el-collapse-item title="Instalasi Rehab Medik" name="5">
              <div>
                Tidak ada deskripsi
              </div>
            </el-collapse-item>
          </el-collapse>

          <h2 class="title">Penunjang Non-Medik</h2>
          <el-collapse v-model="nonmedik" accordion>
            <el-collapse-item title="Gizi" name="1">
              <div>
                Tidak ada deskripsi
              </div>
            </el-collapse-item>

            <el-collapse-item title="Kesling" name="2">
              <div>
                Tidak ada deskripsi
              </div>
            </el-collapse-item>

            <el-collapse-item title="Loundry" name="3">
              <div>
                Tidak ada deskripsi
              </div>
            </el-collapse-item>

            <el-collapse-item title="CSSD" name="4">
              <div>
                Tidak ada deskripsi
              </div>
            </el-collapse-item>

            <el-collapse-item title="IPRS" name="5">
              <div>
                Tidak ada deskripsi
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "penunjang",
    data() {
      return {
        medik: '1',
        nonmedik: '',

        data: [{
          label: 'HEMATOLOGI',
          children: [{
            label: 'Henatologi',
            children: [
              { label: 'Darah Lengkap' },
              { label: 'Waktu Pendarahan' },
              { label: 'Waktu Pembekuan' },
              { label: 'Evaluasi Darah Tepi' },
              { label: 'Retikulosit' },
              { label: 'Hitung Jenis Leukosit' },
              { label: 'Hb' },
              { label: 'Hematokrit' },
              { label: 'Darah Semar' },
              { label: 'Le Sel' },
              { label: 'PT' },
              { label: 'APTT' },
              { label: 'LED' }
              ]
          }]
        }, {
          label: 'KIMIA KLINIK',
          children: [{
            label: 'Gula darah',
            children: [
              { label: 'Glukosa Darah Sewaktu' },
              { label: 'Glukosa Darah Puasa' },
              { label: '2 Jam PP' },
              { label: 'Glukosa Toleransi/TTGO' },
              { label: 'HBA 1c' }
            ]
          }, {
            label: 'Lemak',
            children: [
              { label: 'Cholesterol Total' },
              { label: 'Cholesterol HDL' },
              { label: 'Cholesterol LDL' },
              { label: 'Trigliserida' }
            ]
          }, {
            label: 'Faal Ginjal',
            children: [
              { label: 'Urea (BUN)' },
              { label: 'Kreatinin' },
              { label: 'Asam Urat' }
            ]
          }, {
            label: 'Faal Hati',
            children: [
              { label: 'SGOT' },
              { label: 'SGPT' },
              { label: 'Alkali Fosfatase' },
              { label: 'Bilirubin Total' },
              { label: 'Bilirubin Direk' },
              { label: 'Albumin' },
              { label: 'Globulin' },
              { label: 'Alkali Fosfatase' }
            ]
          }, {
            label: 'Jantung',
            children: [
              { label: 'CK' },
              { label: 'LDH' },
              { label: 'CK-MB' },
              { label: 'Troponin' }
            ]
          }, {
            label: 'Elektrolit',
            children: [
              { label: 'Natrium' },
              { label: 'Kalium' },
              { label: 'Klorida' },
              { label: 'Kalsium' }
            ]
          }, {
            label: 'Zat beracun',
            children: [
              { label: 'Cholinesterase' }
            ]
          }, {
            label: 'Analisa',
            children: [
              { label: 'Analisa Sperma' },
              { label: 'Analisa Cairan Tubuh (CP, CSF, Acites)',
                children: [
                  { label: 'Rivalta' },
                  { label: 'Glukosa' },
                  { label: 'Protein' },
                  { label: 'BJ' },
                  { label: 'pH' },
                  { label: 'LDH' },
                  { label: 'Cellen (Hit. Jenis, Hit. Jml. Lekosit)' }
                ]
              },
              { label: 'Lain-lain' }
            ]
          }]
        }, {
          label: 'URINALISA',
          children: [{
            label: 'Urine Rutin',
            children: [
              { label: 'Urine Rutin' },
              { label: 'Sedimen' },
              { label: 'Protein Esbach' },
              { label: 'Analisa Batu Ginjal' },
              { label: 'Lain-Lain' }
            ]
          }]
        }, {
          label: 'IMMUNOSEROLOGI',
          children: [{
            label: 'Hepatitis',
            children: [
              { label: 'HBsAg (Elfa/Elisa)' },
              { label: 'HBsAg (Rapid)' },
              { label: 'Anti HBs (Elfa/Elisa)' },
              { label: 'Anti HBs (Rapid)' },
              { label: 'Anti HCV (Rapid)' }
            ]
          }, {
            label: 'Torch',
            children: [
              { label: 'Anti Toxoplasma IgG' },
              { label: 'Anti Toxoplasma IgM' }
            ]
          }, {
            label: 'Penyakit Menular Seksual',
            children: [
              { label: 'VDRL' },
              { label: 'TPHA' },
              { label: 'Anti HIV (Elisa)' },
              { label: 'Anti HIV (Rapid)' },
              { label: 'Sifilis Anti TP (Rapid)' },
              { label: 'CD4' }
            ]
          }, {
            label: 'Reproduksi',
            children: [
              { label: 'Tes Kehamilan/PST' }
            ]
          }, {
            label: 'Penyakit Infeksi Lain',
            children: [
              { label: 'Widal' },
              { label: 'Dengue Blot IgG' },
              { label: 'Dengue Blot IgM' },
              { label: 'RDT Malaria (Rapid)' }
            ]
          }, {
            label: 'Golongan Darah',
            children: [
              { label: 'Golongan Darah dan Rhesus' }
            ]
          }, {
            label: 'Rheumatik',
            children: [
              { label: 'CRP' },
              { label: 'ASTO' },
              { label: 'Rh Faktor' }
            ]
          }, {
            label: 'Thyroid',
            children: [
              { label: 'TSHs' },
              { label: 'TSH' },
              { label: 'T4' },
              { label: 'FT4' },
              { label: 'Lain-Lain' }
            ]
          }]
        }, {
          label: 'MIKROBIOLOGI',
          children: [{
            label: 'Feaces',
            children: [
              { label: 'Feaces Rutin/Amoeba/Cysta' },
              {
                label: 'Pemeriksaan Telur Cacing',
                children: [
                  { label: 'metode Flotasi' },
                  { label: 'metode Kato' },
                  { label: 'metode Kato Kats' }
                ]
              }
            ]
          }, {
            label: 'Pemeriksaan Mikroskopik',
            children: [
              { label: 'Pewarnaan Gram' },
              { label: 'Jamur' },
              { label: 'Neisser' },
              { label: 'Trichomonas vaginalis' }
            ]
          }, {
            label: 'M. Tubercolosis',
            children: [
              { label: 'BTA' },
              { label: 'Kultur BTA' },
              { label: 'Sensitivity OAT' }
            ]
          }, {
            label: 'Parasit Darah',
            children: [
              { label: 'Plasmodium/Malaria (DDR)' },
              { label: 'Mikrofilaria' }
            ]
          }, {
            label: 'Pemeriksaan Kultur/Biakan',
            children: [
              { label: 'Aerob' },
              { label: 'Anaerob' },
              { label: 'Neisseria Sp' },
              { label: 'Mycobacterium Sp' },
              { label: 'Corynebacterium Sp' },
              { label: 'Makanan/Minuman' },
              { label: 'Kultur Jamur' },
              { label: 'Uji Kepekaan Difusi' },
              { label: 'Uji Kepekaan Dilusi' },
              { label: 'Resistensi M. TBC' },
              { label: 'Lain-Lain' },
            ]
          }]
        }, {
          label: 'PEMERIKSAAN NAPZA',
          children: [{
            label: 'Narkoba',
            children: [
              { label: 'Narkoba 3 Parameter (Methampethamin, THC, Morfin)' },
              { label: 'Narkoba 6 Parameter (Methampethamin, THC, Morfin Amfethamin, Barbiturat, Cocain)' }
            ]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  }
</script>
