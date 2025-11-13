<template>
    <div class="page">
        <Section class="sectionPaymentOptions">
            <div class="container">
                <div class="title">
                    <div class="buttonback" @click="goBack">
                        <i class="pi pi-arrow-left" />
                    </div>
                    <h3 class="bold">Apoya al Albergue San Francisco</h3>
                    <div class="subtitle">
                        <p>Tu ayuda permite alimentar, vacunar y brindar una nueva oportunidad a los perros del
                            albergue. Escoge el método que más te acomode y realiza tu donación directamente.</p>
                    </div>
                </div>
                <div class="steps">
                    <h6 class="bold">¿Cómo realizar tu donación?</h6>
                    <ol>
                        <li><strong>1.</strong> Elige tu medio de pago preferido: transferencia bancaria, Yape/Plin o
                            PayPal.</li>
                        <li><strong>2.</strong> Realiza el envío del monto al número o cuenta indicada.</li>
                        <li><strong>3.</strong> Guarda tu comprobante (captura o voucher).</li>
                        <li><strong>4.</strong> Envíalo al WhatsApp del albergue <strong>922 266 310</strong>
                            para confirmar
                            tu
                            donación.</li>
                        <li><strong>NOTA:</strong> Debes indicar tu nombre, nombre de la mascota y monto donado.</li>
                    </ol>
                </div>
                <div class="paymentOptions">
                    <div class="cardOption">
                        <div class="containerQR">
                            <div class="qrCode">
                                <div class="logo">
                                    <img src="@/assets/icons/yape_logo_out.png" alt="QR Yape">
                                </div>
                                <img src="@/assets/images/qr_yape.jpg" alt="QR Yape">
                            </div>
                            <div class="qrCode">
                                <div class="logo">
                                    <img src="@/assets/icons/plin_logo_out.png" alt="QR Plin">
                                </div>
                                <img src="@/assets/images/qr_plin.jpg" alt="QR Plin">
                            </div>
                        </div>
                        <p class="bold">Stephanie Christel Mendoza Velasquez</p>
                    </div>
                    <div class="cardOption2">
                        <div class="containerLogo">
                            <div class="logo">
                                <i class="pi pi-credit-card" />
                            </div>
                        </div>
                        <div class="content">
                            <div class="title">
                                <h6 class="bold">Transferencia bancaria</h6>
                            </div>
                            <div class="details">
                                <p>BCP</p>
                                <p>191-36249867-0-25</p>
                                <p>CCI</p>
                                <p>00219113624986702559</p>
                                <div class="line"></div>
                                <p>INTERBANK</p>
                                <p>1543147371121</p>
                                <p>Dolares</p>
                                <p>8983170530579</p>
                                <p>CCI</p>
                                <p>00389801317053057948</p>
                                <div class="line"></div>
                                <p>BBVA</p>
                                <p>001108140221701416</p>
                            </div>
                        </div>
                    </div>
                    <div class="cardOption2">
                        <div class="containerLogo">
                            <div class="logo">
                                <i class="pi pi-paypal" />
                            </div>
                        </div>
                        <div class="content">
                            <div class="title">
                                <h6 class="bold">Paypal</h6>
                            </div>
                            <div class="details">
                                <p>tephi.chris@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
    router.push({ path: '/catalogo/apadrinar' });
}

</script>