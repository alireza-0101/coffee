import React from 'react'

export default function DarkModeStyles() {
    return (
        <div>
            <style>
                {
                    `
                    ::-webkit-scrollbar {
                        background-color: rgb(56, 56, 56);
                        color: #f5f0e9;
                    }
                    
                    ::-webkit-scrollbar-corner {
                        background-color: rgb(0, 0, 0);
                    }
                    
                    ::-webkit-scrollbar-thumb {
                        background-color: rgb(75, 75, 75);
                    }
                    
                    body {
                        background-color: rgb(36, 36, 36) !important;
                        color: #f7f7f7 !important;
                    }
                    
                    body .bg-light {
                        background-color: rgb(51, 51, 51) !important;
                        color: #f7f7f7 !important;
                    }
                    
                    body .bg-white {
                        background-color: rgb(22, 22, 22) !important;
                        color: #f7f7f7 !important;
                    }
                    
                    body .bg-white * {
                        color: #f7f7f7 !important;
                    }
                    
                    .modal-content{
                        background-color: rgb(70, 70, 70) !important;
                        color: #f7f7f7 !important;
                    }
                    
                    body .offcanvas {
                        background-color: rgb(51, 51, 51) !important;
                        color: #f7f7f7 !important;
                    }
                    
                    body .offcanvas * {
                        color: #f7f7f7 !important;
                    }

                    .account-sidebar-items:hover {
                        background-color: rgb(75, 75, 75);
                    }
                    
                    body .header {
                        background-color: rgb(51, 51, 51) !important;
                        color: #f7f7f7 !important;
                    }
                    
                    body .footer {
                        background-color: rgb(51, 51, 51) !important;
                        color: #f7f7f7 !important;
                    }
                    
                    body .contact-box-wrapper {
                        background-color: rgb(51, 51, 51) !important;
                        color: #f7f7f7 !important;
                    }
                    
                    body .landing-start-to-create-account {
                        background-color: rgb(71, 71, 71) !important;
                        border: rgb(71, 71, 71) 2px solid !important;
                        color: #f7f7f7 !important;
                    }
                    
                    body .landing-start-to-create-account input {
                        background-color: rgb(71, 71, 71) !important;
                        color: #f7f7f7 !important;
                    }
                    
                    body .introduction-container {
                        background-color: rgb(71, 71, 71) !important;
                        color: #f7f7f7 !important;
                    }
                    
                    body .introduction-container * {
                        color: #f7f7f7 !important;
                    }
                    
                    body .card.post {
                        background-color: rgb(71, 71, 71) !important;
                    }
                    
                    body .card * {
                        color: #f7f7f7 !important;
                    }
                    
                    body .step-box * {
                        color: #f7f7f7 !important;
                    }
                    
                    body .step-box svg {
                        background-color: #cfcfcf !important;
                        border-radius: 50%;
                    }
                    
                    body .login-btn {
                        color: #f7f7f7 !important;
                    }
                    
                    body .login-btn:hover {
                        background-color: rgb(78, 78, 78) !important;
                    }
                    
                    body .navbar-items.home a {
                        background-color: rgb(78, 78, 78) !important;
                    }
                    
                    body .navbar-items a:hover {
                        background-color: rgb(78, 78, 78) !important;
                    }
                    
                    .explore-filter {
                        background-color: rgb(78, 78, 78) !important;
                    }
                    
                    .show-more-btn {
                        background-color: rgb(78, 78, 78) !important;
                    }
                    
                    .support-transaction-box {
                        background-color: rgb(78, 78, 78) !important;
                    }
                    
                    .pay-box {
                        background-color: rgb(78, 78, 78) !important;
                    }
                    .pay-box .count-box {
                        color: #000000 !important;
                    }
                    
                    .alert-light {
                        background-color: rgb(78, 78, 78) !important;
                        color: #f7f7f7 !important;
                    }
                    
                    .navbar-expand * {
                        color: #f7f7f7 !important;
                    }
                    
                    .navbar-toggler-icon  {
                        background-color: #f7f7f7 !important;
                        padding: 5px;
                        border-radius: 5px;
                    }
                    
                    .user-improvment-box  {
                        background-color: rgb(78, 78, 78) !important;
                        color: #f7f7f7 !important;
                    }

                    .alert-warning {
                        background-color: rgb(78, 78, 78) !important;
                    }
                    `
                }
            </style>
        </div>
    )
}